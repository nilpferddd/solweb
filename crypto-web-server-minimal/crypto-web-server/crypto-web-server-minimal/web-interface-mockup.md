# Solana Token Creator Web Interface Mockup

## Page Layouts

### Home Page
```
+------------------------------------------------------+
|  Logo   [Home] [Create Token] [Liquidity] [Help]     |
|                                 [Connect Wallet ▼]   |
+------------------------------------------------------+
|                                                      |
|     Create Your Own Solana Token                     |
|     Simple, Fast, and Customizable                   |
|                                                      |
|     [Get Started]                                    |
|                                                      |
+------------------------------------------------------+
|                                                      |
|  Features:                                           |
|  - Create custom tokens with various extensions      |
|  - Manage your tokens through an intuitive interface |
|  - Create and manage liquidity pools                 |
|  - Phantom and Solflare wallet integration           |
|                                                      |
+------------------------------------------------------+
```

### Connect Wallet Modal
```
+------------------------------------------------------+
|  Connect Your Wallet                           [X]   |
+------------------------------------------------------+
|                                                      |
|  [Phantom Wallet]                                    |
|                                                      |
|  [Solflare Wallet]                                   |
|                                                      |
+------------------------------------------------------+
```

### Create Token Page
```
+------------------------------------------------------+
|  Logo   [Home] [Create Token] [Liquidity] [Help]     |
|                          [Connected: 0x123...456 ▼]  |
+------------------------------------------------------+
|                                                      |
|  Create Your Solana Token                            |
|                                                      |
|  [Basic Info] [Image & Social] [Extensions] [Advanced]
|                                                      |
|  Basic Information:                                  |
|  +--------------------------------------------------+|
|  | Token Name*:                                     ||
|  | [                                            ]   ||
|  |                                                  ||
|  | Token Symbol*:                                   ||
|  | [                                            ]   ||
|  |                                                  ||
|  | Decimals*:                                       ||
|  | [         ] (0 for NFT, 9 for standard token)    ||
|  |                                                  ||
|  | Supply*:                                         ||
|  | [                                            ]   ||
|  |                                                  ||
|  | Description*:                                    ||
|  | [                                            ]   ||
|  | [                                            ]   ||
|  +--------------------------------------------------+|
|                                                      |
|  [Previous]                [Next]                    |
|                                                      |
+------------------------------------------------------+
```

### Image & Social Links Tab
```
+------------------------------------------------------+
|  [Basic Info] [Image & Social] [Extensions] [Advanced]
|                                                      |
|  Token Image:                                        |
|  +--------------------------------------------------+|
|  |                                                  ||
|  |                 [Upload Image]                   ||
|  |                                                  ||
|  |          Preview will appear here                ||
|  |                                                  ||
|  +--------------------------------------------------+|
|                                                      |
|  Social Links:                                       |
|  +--------------------------------------------------+|
|  | Website:                                         ||
|  | [                                            ]   ||
|  |                                                  ||
|  | Twitter:                                         ||
|  | [                                            ]   ||
|  |                                                  ||
|  | Telegram:                                         ||
|  | [                                            ]   ||
|  |                                                  ||
|  | Discord:                                         ||
|  | [                                            ]   ||
|  +--------------------------------------------------+|
|                                                      |
|  [Previous]                [Next]                    |
|                                                      |
+------------------------------------------------------+
```

### Extensions Tab
```
+------------------------------------------------------+
|  [Basic Info] [Image & Social] [Extensions] [Advanced]
|                                                      |
|  Token Extensions:                                   |
|  +--------------------------------------------------+|
|  | [ ] Non-Transferable                             ||
|  |     Tokens cannot be transferred between wallets ||
|  |                                                  ||
|  | [ ] Permanent Delegate                           ||
|  |     Address: [                               ]   ||
|  |                                                  ||
|  | [ ] Confidential Transfer                        ||
|  |     Policy: (○) Auto  (○) Manual                ||
|  |                                                  ||
|  | [ ] Transfer Fee                                 ||
|  |     Fee %: [      ]  Max Fee: [             ]   ||
|  |                                                  ||
|  | [ ] Transfer Hook                                ||
|  |     Program ID: [                            ]   ||
|  |                                                  ||
|  | [ ] Interest-Bearing                             ||
|  |     Rate %: [      ]                            ||
|  |                                                  ||
|  | [ ] Default Account State                        ||
|  |     State: (○) Initialized  (○) Frozen          ||
|  +--------------------------------------------------+|
|                                                      |
|  [Previous]                [Next]                    |
|                                                      |
+------------------------------------------------------+
```

### Advanced Tab
```
+------------------------------------------------------+
|  [Basic Info] [Image & Social] [Extensions] [Advanced]
|                                                      |
|  Advanced Options:                                   |
|  +--------------------------------------------------+|
|  | Network:                                         ||
|  | (○) Mainnet  (○) Devnet  (○) Custom             ||
|  |                                                  ||
|  | Custom RPC URL:                                  ||
|  | [                                            ]   ||
|  |                                                  ||
|  | Recipient Wallet (if different from connected):  ||
|  | [                                            ]   ||
|  |                                                  ||
|  | [ ] Use Custom Token Keypair                     ||
|  |     Keypair: [                               ]   ||
|  |                                                  ||
|  | Mint Authority:                                  ||
|  | [                                            ]   ||
|  |                                                  ||
|  | Freeze Authority:                                ||
|  | [                                            ]   ||
|  +--------------------------------------------------+|
|                                                      |
|  [Previous]                [Create Token]            |
|                                                      |
+------------------------------------------------------+
```

### Token Creation Confirmation
```
+------------------------------------------------------+
|                                                      |
|  Token Creation Confirmation                   [X]   |
|                                                      |
|  You are about to create a new Solana token with     |
|  the following parameters:                           |
|                                                      |
|  Name: Example Token                                 |
|  Symbol: EXT                                         |
|  Decimals: 9                                         |
|  Supply: 1,000,000                                   |
|  Extensions: Transfer Fee (2%), Interest-Bearing (5%)|
|                                                      |
|  Network: Mainnet                                    |
|  Estimated cost: 0.1 SOL                             |
|                                                      |
|  [Cancel]                [Confirm & Sign]            |
|                                                      |
+------------------------------------------------------+
```

### Manage Tokens Page
```
+------------------------------------------------------+
|  Logo   [Home] [Create Token] [Liquidity] [Help]     |
|                          [Connected: 0x123...456 ▼]  |
+------------------------------------------------------+
|                                                      |
|  Manage Your Tokens                                  |
|                                                      |
|  +--------------------------------------------------+|
|  | Token Name | Symbol | Supply | Created Date      ||
|  |------------------------------------------------  ||
|  | Example    | EXT    | 1M     | 2025-03-27        ||
|  | Token      |        |        |                   ||
|  |------------------------------------------------  ||
|  | Test Token | TST    | 10K    | 2025-03-26        ||
|  |                                                  ||
|  +--------------------------------------------------+|
|                                                      |
+------------------------------------------------------+
```

### Token Details Page
```
+------------------------------------------------------+
|  Logo   [Home] [Create Token] [Liquidity] [Help]     |
|                          [Connected: 0x123...456 ▼]  |
+------------------------------------------------------+
|                                                      |
|  Token Details: Example Token (EXT)                  |
|                                                      |
|  [Basic Info] [Extensions] [Operations]              |
|                                                      |
|  Basic Information:                                  |
|  +--------------------------------------------------+|
|  | Token Address: 7X2aBc...123                      ||
|  | Name: Example Token                               ||
|  | Symbol: EXT                                       ||
|  | Decimals: 9                                       ||
|  | Total Supply: 1,000,000                           ||
|  | Your Balance: 1,000,000                           ||
|  |                                                  ||
|  | [Edit Metadata]                                  ||
|  +--------------------------------------------------+|
|                                                      |
|  [Back to Tokens]                                    |
|                                                      |
+------------------------------------------------------+
```

### Liquidity Pool Page
```
+------------------------------------------------------+
|  Logo   [Home] [Create Token] [Liquidity] [Help]     |
|                          [Connected: 0x123...456 ▼]  |
+------------------------------------------------------+
|                                                      |
|  Liquidity Pools                                     |
|                                                      |
|  [Create Pool] [Manage Pools]                        |
|                                                      |
|  Create Liquidity Pool:                              |
|  +--------------------------------------------------+|
|  | Token:                                           ||
|  | [Select Token ▼]                                 ||
|  |                                                  ||
|  | Pair With:                                       ||
|  | (○) SOL  (○) USDC  (○) Other                    ||
|  |                                                  ||
|  | Other Token:                                     ||
|  | [                                            ]   ||
|  |                                                  ||
|  | Initial Liquidity:                               ||
|  | [            ] EXT                               ||
|  | [            ] SOL                               ||
|  |                                                  ||
|  +--------------------------------------------------+|
|                                                      |
|  [Create Pool]                                       |
|                                                      |
+------------------------------------------------------+
```

## Component Details

### Wallet Connection Component
- Button to initiate wallet connection
- Modal with wallet options (Phantom, Solflare)
- Display connected wallet address with copy option
- Show wallet balance (SOL)
- Dropdown with options (Disconnect, View on Explorer)

### Token Form Components
- Multi-step form with progress indicator
- Input validation with error messages
- Tooltips for explaining technical concepts
- Preview functionality for visual elements
- Responsive design for all device sizes

### Token Extension Components
- Checkbox toggles for enabling/disabling extensions
- Conditional form fields that appear when extensions are enabled
- Help text explaining each extension's purpose and implications
- Warning messages for irreversible actions

### Token Management Components
- Sortable and filterable token list
- Detailed token view with tabs for different aspects
- Operations panel with buttons for common actions
- Transaction history and status indicators

### Liquidity Pool Components
- Pool creation form with token selection
- Pool management interface
- Add/remove liquidity forms
- Pool statistics and performance metrics

## Responsive Design Considerations

### Mobile View Adaptations
- Collapsible navigation menu
- Simplified form layouts with stacked fields
- Touch-friendly input controls
- Reduced information density

### Tablet View Adaptations
- Hybrid layout between mobile and desktop
- Optimized form layouts for medium screens
- Adjusted spacing and typography

### Desktop View Adaptations
- Full navigation bar
- Multi-column layouts
- Side-by-side form sections where appropriate
- Enhanced visual feedback and animations
