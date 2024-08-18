module my_addr::collateral {
    use std::signer;
    use aptos_framework::coin;
    use my_addr::rwa_token::RWAToken;

    struct CollateralStore has key {
        balance: coin::Coin<RWAToken>,
    }

    public entry fun deposit(account: &signer, amount: u64) acquires CollateralStore {
        let addr = signer::address_of(account);
        if (!exists<CollateralStore>(addr)) {
            move_to(account, CollateralStore { balance: coin::zero<RWAToken>() });
        };
        let store = borrow_global_mut<CollateralStore>(addr);
        let deposit_coin = coin::withdraw<RWAToken>(account, amount);
        coin::merge(&mut store.balance, deposit_coin);
    }

    public entry fun withdraw(account: &signer, amount: u64) acquires CollateralStore {
        let addr = signer::address_of(account);
        let store = borrow_global_mut<CollateralStore>(addr);
        let withdrawn_coin = coin::extract(&mut store.balance, amount);
        coin::deposit(addr, withdrawn_coin);
    }

    public fun get_balance(addr: address): u64 acquires CollateralStore {
        if (!exists<CollateralStore>(addr)) {
            return 0
        };
        let store = borrow_global<CollateralStore>(addr);
        coin::value(&store.balance)
    }
}