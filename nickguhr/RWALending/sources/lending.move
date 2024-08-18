module my_addr::lending {
    use std::signer;
    use my_addr::collateral;
    use my_addr::rwa_token;

    struct LoanInfo has key {
        borrowed_amount: u64,
        collateral_amount: u64,
    }

    public entry fun borrow(account: &signer, borrow_amount: u64, collateral_amount: u64) {
        let addr = signer::address_of(account);
        
        // Check if user has enough collateral
        assert!(collateral::get_balance(addr) >= collateral_amount, 1);

        // Deposit collateral
        collateral::deposit(account, collateral_amount);

        // Mint and transfer borrowed amount to user
        rwa_token::mint(account, borrow_amount);

        // Record loan information
        move_to(account, LoanInfo { borrowed_amount: borrow_amount, collateral_amount });
    }

    public entry fun repay(account: &signer, repay_amount: u64) acquires LoanInfo {
        let addr = signer::address_of(account);
        let loan_info = borrow_global_mut<LoanInfo>(addr);

        // Burn repaid amount
        rwa_token::burn(account, repay_amount);

        // Update loan information
        loan_info.borrowed_amount = if (loan_info.borrowed_amount > repay_amount) {
            loan_info.borrowed_amount - repay_amount
        } else {
            0
        };

        // If loan is fully repaid, return collateral
        if (loan_info.borrowed_amount == 0) {
            collateral::withdraw(account, loan_info.collateral_amount);
        }
    }
}