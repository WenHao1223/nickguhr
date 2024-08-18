module my_addr::rwa_token {
    use std::string;
    use aptos_framework::coin;
    use aptos_framework::signer;

    struct RWAToken {}

    struct Capabilities has key {
        burn_cap: coin::BurnCapability<RWAToken>,
        freeze_cap: coin::FreezeCapability<RWAToken>,
        mint_cap: coin::MintCapability<RWAToken>,
    }

    fun init_module(sender: &signer) {
        let (burn_cap, freeze_cap, mint_cap) = coin::initialize<RWAToken>(
            sender,
            string::utf8(b"Real World Asset Token"),
            string::utf8(b"RWA"),
            6,
            true
        );

        move_to(sender, Capabilities {
            burn_cap,
            freeze_cap,
            mint_cap,
        });
    }

    public entry fun mint(account: &signer, amount: u64) acquires Capabilities {
        let account_addr = signer::address_of(account);
        let caps = borrow_global<Capabilities>(@my_addr);
        let coins = coin::mint(amount, &caps.mint_cap);
        coin::deposit(account_addr, coins);
    }

    public entry fun burn(account: &signer, amount: u64) acquires Capabilities {
        let account_addr = signer::address_of(account);
        let caps = borrow_global<Capabilities>(@my_addr);
        coin::burn_from(account_addr, amount, &caps.burn_cap);
    }
}