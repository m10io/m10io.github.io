"use strict";(self.webpackChunkproduct=self.webpackChunkproduct||[]).push([[334],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,p=u["".concat(l,".").concat(m)]||u[m]||f[m]||s;return t?r.createElement(p,i(i({ref:n},d),{},{components:t})):r.createElement(p,i({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5624:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),a=t(7685),s=t(7316),i=t(5291),o=t(3894);function l(e){let n=e.code.trim();return r.createElement("div",{className:"code"},r.createElement("div",{className:"code-inner"},r.createElement(a.ZP,{value:n,height:e.height||"auto",theme:s.C,extensions:[o.ih[e.lang]],readOnly:"true"}),r.createElement(i.Z,{code:n,className:"buttonGroup"})))}},132:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(7462),a=(t(7294),t(3905)),s=t(3894),i=t(5624);const o={},l="Transfers",c={unversionedId:"api/transfers",id:"api/transfers",title:"Transfers",description:"Transfers are the way of sending funds from one account to another. Each transfer on the M10 ledger is made up of multiple transfer steps.",source:"@site/docs/api/transfers.mdx",sourceDirName:"api",slug:"/api/transfers",permalink:"/api/transfers",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Roles",permalink:"/api/roles"}},d={},u=[{value:"Transfer Steps",id:"transfer-steps",level:3},{value:"Transfer Hops",id:"transfer-hops",level:3},{value:"Initiate and Commit",id:"initiate-and-commit",level:3},{value:"Model",id:"model",level:2},{value:"API Calls",id:"api-calls",level:2},{value:"Create a single transfer",id:"create-a-single-transfer",level:3},{value:"Create a multi-transfer",id:"create-a-multi-transfer",level:3},{value:"Create a multi-transfer",id:"create-a-multi-transfer-1",level:3},{value:"Transfer with metadata",id:"transfer-with-metadata",level:3},{value:"Initiate &amp; Commit",id:"initiate--commit",level:3},{value:"List",id:"list",level:3},{value:"Observe",id:"observe",level:3}],f={toc:u};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transfers"},"Transfers"),(0,a.kt)("p",null,'Transfers are the way of sending funds from one account to another. Each transfer on the M10 ledger is made up of multiple transfer steps.\nIn each transfer step, there is a "from account" (the sender), a "to account" (the receiver), and an amount. In addition, each step contains a\nmetadata field, which allows for unstructured data to be passed along with the transfer. Generally, this is formatted as protobufs. All steps are applied atomically \u2014 if one step fails all the steps fail.'),(0,a.kt)("h3",{id:"transfer-steps"},"Transfer Steps"),(0,a.kt)("p",null,'As discussed above each transfer is made up of multiple "steps". This allows you to send to multiple accounts in a single atomic action. Fees are a great use case for this. Fees are usually paid out to an account other than the receiver\'s, and so need to be collected in each transfer. To collect fees, you would create a single transfer with two steps. One for the main transfer (i.e Alice to Bob), and one for the fee transfer (i.e Alice to fee account). If Alice lacks the funds to complete either transfer step, the entire transfer will fail.'),(0,a.kt)("h3",{id:"transfer-hops"},"Transfer Hops"),(0,a.kt)("p",null,'Since M10 is a "hierarchical" ledger, transfers have some unique behavior. Let\'s imagine an account structure with two banks: Iron Bank and Tungsten Bank.\nIron Bank has a single user Alice, and Tungsten Bank has one user named Chris. What happens if Alice tries to send $50 to Chris? The money that is in Alice\'s account isn\'t really\nUSD; the money is a bank deposit. Banks, in many countries, may hold a smaller amount of funds than the total deposits their customers have. This is referred to as the fractional reserve model.\nBut for customers of banks to transact with each other they must exchange real currency. The M10 ledger makes this process seamless. When Alice creates a new transfer step to Chris,\nthe ledger does several different "hops" behind the scenes.'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'A "hop" is different than a ',(0,a.kt)("inlineCode",{parentName:"p"},"TransferStep"),". A hop is an internal procedure the ledger does, where as a ",(0,a.kt)("inlineCode",{parentName:"p"},"TransferStep")," is a way to bundle multiple transfers into a single operation. The relationship is as follows: ",(0,a.kt)("inlineCode",{parentName:"p"},"Transfer -> Transfer Step -> Hop"),'. Remember, you\'ll never have to create a "hop" with our API.')),(0,a.kt)("p",null,'First Alice\'s money is sent to Tungsten bank. Then Tungsten Bank sends money from its holdings, through the root account, to the Iron Bank. The Iron Bank has now been credited with 50 dollars. Next, the Iron Bank will issue new Iron Bank M1 currency to Chris. In the ledger each of these "hops" is done automatically; if any one of them fails the entire transfer fails. You will notice here that no new money is created, and everything is kept balanced. Through this system, the M10 ledger is able to support fractional reserve banking seamlessly.'),(0,a.kt)("br",null),(0,a.kt)("img",{src:"/docs/img/transfer-hierarchy.svg",style:{display:"block",margin:"auto",width:"90%"}}),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"initiate-and-commit"},"Initiate and Commit"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This is an advanced topic, and to best understand it you should read the Role and Role Binding API docs first.")),(0,a.kt)("p",null,"There are many situations where you may want to interact with an external system to perform validation of a transfer. For instance, if a bank wishes to charge fees per transfer, they need a way to validate that. Or imagine if you want to only send someone funds after they have completed some actions, like moving money into an escrow account. M10 solves these use cases through our initiate and commit system. Readers who know about two-phase commit protocols will find this familiar."),(0,a.kt)("p",null,"We introduce two new transaction types, ",(0,a.kt)("inlineCode",{parentName:"p"},"InitiateTransfer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CommitTransfer"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"InititateTransfer")," will debit every hop in the transfer, ensuring that no balances drop below zero. ",(0,a.kt)("inlineCode",{parentName:"p"},"CommitTransfer")," performs the credit side of the operation. The true power of this system comes when combined with our RBAC system. In the example where a bank wishes to enforce fees on an account, they would only grant the user ",(0,a.kt)("inlineCode",{parentName:"p"},"Initiate")," permissions on their account. Then the bank would hold ",(0,a.kt)("inlineCode",{parentName:"p"},"Commit")," permissions on the account. The bank could then ",(0,a.kt)("a",{parentName:"p",href:"/category/api-docs"},"observe")," initiate transfers, and validate them for correct fees. If a fee is incorrect they would issue ",(0,a.kt)("inlineCode",{parentName:"p"},"CommitTransfer"),", with a ",(0,a.kt)("inlineCode",{parentName:"p"},"new_state")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"rejected"),". If the fee is correct they would do the same with a ",(0,a.kt)("inlineCode",{parentName:"p"},"new_state")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"accepted"),". "),(0,a.kt)("p",null,'When a transfer is "accepted", a credit is performed on each of the receiving accounts. But when a transfer is "rejected" the debit done in "initiated" is rolled-back. '),(0,a.kt)("br",null),(0,a.kt)("img",{src:"/docs/img/two-phase-transfer.svg",style:{display:"block",margin:"auto",width:"90%"}}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"model"},"Model"),(0,a.kt)(i.Z,{code:"\nmessage CreateTransfer {\n    repeated TransferStep transfer_steps = 1;\n}\nmessage TransferStep {\n  bytes from_account_id = 1;\n  bytes to_account_id = 2;\n  uint64 amount = 4;\n  repeated google.protobuf.Any metadata = 7;\n}\nmessage FinalizedTransfer {\n  uint64 tx_id = 1;\n  bytes context_id = 2;\n  repeated TransferStep transfer_steps = 3;\n  TransactionError error = 4;\n  fixed64 timestamp = 5;\n  TransferState state = 7;\n  enum TransferState {\n    ACCEPTED = 0;\n    REJECTED = 1;\n    PENDING = 2;\n    EXPIRED = 3;\n  }\n}\n",lang:"protobuf",mdxType:"Highlight"}),(0,a.kt)("h2",{id:"api-calls"},"API Calls"),(0,a.kt)("h3",{id:"create-a-single-transfer"},"Create a single transfer"),(0,a.kt)(s.ZP,{code:{rust:'\nuse m10_sdk::LedgerClient as M10Client;\nuse m10_sdk::KeyPair;\nlet key_pair = KeyPair::Ed25519("...");\nlet client = M10Client::new(key_pair, channel);\nlet from_account = hex::decode("07800002000000000000000000000002").unwrap();\nlet to_account = hex::decode("07800002000000000000000000000003").unwrap();\nlet transfer = TransferBuilder::new()\n    .step(\n        StepBuilder::new(from_account, to_account, 1000)\n    );\nlet response = client.transfer(transfer).await.unwrap();\n',ts:"\nconst txId = await client.transfer(\n    new TransferBuilder().step(\n        new StepBuilder(\n            new AccountId('07800002000000000000000000000002'),\n            new AccountId('07800002000000000000000000000003'),\n            1000\n        )\n    )\n)\nconsole.log(`Transferred funds in transaction ${txId}`)\n",dart:'\nfinal response = await client.createTransfer(\n  fromAccountId: "07800002000000000000000000000002",\n  toAccountId: "07800002000000000600000000000003",\n  amount: 100,\n  operator: "m10.usd",\n);\n',cli:"\nm10 create transfer \\\n  --from-account 07800002000000000000000000000002 \\\n  --to-account 07800002000000000600000000000003 \\\n  --amount 1000\n"},mdxType:"Code"}),(0,a.kt)("h3",{id:"create-a-multi-transfer"},"Create a multi-transfer"),(0,a.kt)(s.ZP,{code:{rust:"\nplaceholder\n",ts:"\nconst txId = await client.transfer(\n    new TransferBuilder()\n    .step(\n        new StepBuilder(\n            new AccountId('07800002000000000000000000000002'),\n            new AccountId('07800002000000000000000000000003'),\n            1000\n        )\n    ).step(\n        new StepBuilder(\n            new AccountId('07800002000000000000000000000002'),\n            new AccountId('07800001000000000000000000000002'),\n            500\n        ),\n    )\n)\nconsole.log(`Transferred multiple funds in transaction ${txId}`)\n",dart:"\nplaceholder\n",cli:"\nplaceholder\n"},mdxType:"Code"}),(0,a.kt)("h3",{id:"create-a-multi-transfer-1"},"Create a multi-transfer"),(0,a.kt)(s.ZP,{code:{rust:'\nuse m10_sdk::LedgerClient as M10Client;\nuse m10_sdk::KeyPair;\nlet key_pair = KeyPair::Ed25519("...");\nlet client = M10Client::new(key_pair, channel);\nlet from_account = hex::decode("07800002000000000000000000000002").unwrap();\nlet to_account = hex::decode("07800002000000000000000000000003").unwrap();\nlet transfer = TransferBuilder::new()\n    .step(\n        StepBuilder::new(from_account, to_account, 1000)\n            .metadata(Memo { plaintext: "Funds".to_string() })\n    );\nlet response = client.transfer(transfer).await.unwrap();\n',ts:"\nconst txId = await client.transfer(\n    new TransferBuilder()\n    .step(\n        new StepBuilder(\n            new AccountId('07800002000000000000000000000002'),\n            new AccountId('07800002000000000000000000000003'),\n            1000\n        )\n    ).step(\n        new StepBuilder(\n            new AccountId('07800002000000000000000000000002'),\n            new AccountId('07800001000000000000000000000002'),\n            500\n        ),\n    )\n)\nconsole.log(`Transferred multiple funds in transaction ${txId}`)\n",dart:"\nplaceholder\n",cli:"\nplaceholder\n"},mdxType:"Code"}),(0,a.kt)("h3",{id:"transfer-with-metadata"},"Transfer with metadata"),(0,a.kt)(s.ZP,{code:{rust:"placeholder",ts:"const txId = await client.transfer(\n    new TransferBuilder()\n    .step(\n        new StepBuilder(\n            new AccountId('07800002000000000000000000000002'),\n            new AccountId('07800002000000000000000000000003'),\n            1000\n        )\n        .custom_metadata('my.type', new Uint8Array(0))\n        .metadata(convertMemoToAny({ plaintext: 'my memo' }))\n    )\n)\nconsole.log(`Transferred funds with metadata in transaction ${txId}`)\n",dart:"placeholder",cli:"m10 create transfer \\\n  --from-account 07800002000000000000000000000002 \\\n  --to-account 07800002000000000600000000000003 \\\n  --amount 1000 \\\n  --memo Funds\n"},mdxType:"Code"}),(0,a.kt)("h3",{id:"initiate--commit"},"Initiate & Commit"),(0,a.kt)(s.ZP,{code:{rust:'\nuse m10_sdk::LedgerClient as M10Client;\nuse m10_sdk::KeyPair;\nlet key_pair = KeyPair::Ed25519("...");\nlet client = M10Client::new(key_pair, channel);\nlet from_account = hex::decode("07800002000000000000000000000002").unwrap();\nlet to_account = hex::decode("07800002000000000000000000000003").unwrap();\nlet transfer = TransferBuilder::new()\n    .step(\n        StepBuilder::new(from_account, to_account, 1000)\n            .metadata(Memo { plaintext: "Funds".to_string() })\n    );\nlet response = client.initiate_transfer(transfer).await.unwrap();\n\n\nlet transfer = sdk::CommitTransfer {\n    pending_tx_id: 1080030000,\n    new_state: sdk::transaction::commit_transfer::TransferState::Accepted as i32,\n};\nlet signed_request = admin.sign_request(Data::CommitTransfer(transfer)).await.unwrap();\nlet response = client.create_transaction(signed_request).await.unwrap();\n',ts:"\nconst txId = await client.initiateTransfer(\n    new TransferBuilder()\n    .step(\n        new StepBuilder(\n            new AccountId('07800002000000000000000000000002'),\n            new AccountId('07800002000000000000000000000003'),\n            1000\n        )\n    )\n)\nconsole.log(`Transfer initiated in transaction ${txId}`)\n\n\n// Option: Commit the transfer\nconst commitId = await client.commitTransfer(txId, true)\nconsole.log(`Transfer committed in transaction ${commitId}`)\n\n\n// Option: Reject the transfer\nconst rejectId = await client.commitTransfer(txId, false)\nconsole.log(`Transfer rejected in transaction ${rejectId}`)\n",dart:"\n// NOTE: Not yet available in the latest version of the Dart SDK\n",cli:"\nm10 create transfer \\\n  --from-account 07800002000000000000000000000002 \\\n  --to-account 07800002000000000600000000000003 \\\n  --amount 1000 \\\n  --memo Funds \\\n  --no-commit\n\n\nm10 update transfer \\\n--id 1080030000 \\\n--state accept\n"},mdxType:"Code"}),"### GET",(0,a.kt)(s.ZP,{code:{rust:"\nplaceholder\n",ts:"\n// Create a transfer\nconst txId = await client.transfer(\n    new TransferBuilder()\n    .step(\n        new StepBuilder(\n            new AccountId('07800002000000000000000000000002'),\n            new AccountId('07800002000000000000000000000003'),\n            1\n        )\n    )\n)\n\n\nconst transfer = await client.getTransfer(txId)\nconsole.log(`Transfer ${JSON.stringify(transfer, null, 2)}`)\n",dart:"\nplaceholder\n",cli:"\nplaceholder\n"},mdxType:"Code"}),(0,a.kt)("h3",{id:"list"},"List"),(0,a.kt)(s.ZP,{code:{rust:'\nuse m10_sdk::LedgerClient as M10Client;\nuse m10_sdk::{sdk, KeyPair};\nlet admin = KeyPair::Ed25519("...");\nlet client = M10Client::new(channel);\nlet request = sdk::ListTransferRequest {\n    filter: Some(filter),\n    min_tx_id: self.min_tx_id,\n    max_tx_id,\n    limit: self.limit,\n    include_child_accounts: self.include_child_accounts,\n};\nlet signed_request = admin.sign_request(request).await.unwrap();\nlet response = client.list_transfers(signed_request).await.unwrap();\n',ts:"\nconst print = (transfers: Transfer[]) => console.log(`Transfer[${transfers.length}]:\n${transfers.map(transfer => JSON.stringify(transfer, null, 2))}`)\n\n\n// Create a transfer\nconst txId = await client.transfer(\n    new TransferBuilder()\n    .step(\n        new StepBuilder(\n            new AccountId('07800002000000000000000000000002'),\n            new AccountId('07800002000000000000000000000003'),\n            1\n        )\n    ),\n    new TextEncoder().encode('my-context-id')\n)\n// List transfers by account\n// Between min & max transaction IDs\n// Limit to 2 transfers\nconst transfersByAccount = await client.listTransfers(\n    TransferFilter.byAccount(\n        new AccountId('07800002000000000000000000000002')\n    )\n    .minTxId(txId)\n    .maxTxId(txId + 100000)\n    .limit(2)\n)\nprint(transfersByAccount)\n\n\n// List transfers by context ID\nconst transfersByContextId = await client.listTransfers(\n    TransferFilter.byContextId(\n        new TextEncoder().encode('my-context-id')\n    )\n)\nprint(transfersByContextId)\n",dart:'\nfinal transfers = await client.listTransfers(\n  accountId: "07800002000000000600000000000003",\n  operator: "m10.usd",\n);\n',cli:"\nm10 list transfer \\\n  --account 07800002000000000600000000000003 \\\n  --limit 10\n"},mdxType:"Code"}),(0,a.kt)("h3",{id:"observe"},"Observe"),(0,a.kt)(s.ZP,{code:{rust:'\nuse m10_sdk::LedgerClient as M10Client;\nuse m10_sdk::{sdk, KeyPair, sdk::transaction_data::Data};\nlet admin = KeyPair::Ed25519("...");\nlet client = M10Client::new(channel);\nlet account_id_bytes = hex::decode("07800002000000000000000000000002").unwrap();\nlet account_ids = vec![ AccountId::try_from_be_slice(&bytes).unwrap() ];\nlet request = sdk::ObserveAccountsRequest {\n  involved_accounts: account_ids.iter().map(|id| id.to_be_bytes().to_vec()).collect(),\n  starting_from: None,\n}\nlet signed_request = admin.sign_request(request).await.unwrap();\nlet mut transfers = client.observe_transfers(signed_request).await.unwrap();\nwhile let Some(message) = transfers.next().await {\n  match message {\n    Ok(sdk::FinalizedTransactions { transactions }) => {\n      for tx in transactions {\n        print_doc(tx, format).unwrap();\n      }\n    }\n    Err(err) => {\n      eprintln!("Error while receiving message: {}", err);\n      break;\n    }\n  }\n}\n',ts:"\nconst [stream, startStream] = await client.observeTransfers(\n    new AccountFilter()\n    .involves(new AccountId('07800002000000000000000000000002'))\n    .involves(new AccountId('07800002000000000600000000000003'))\n    // Replay from a specific transaction ID\n    .startingFrom(1080030000)\n)\n\n\n// Handle the observations\nstream.on(\"data\", (transfer: m10.sdk.IFinalizedTransactions) => {\n    console.log(`Observed transfer ${JSON.stringify(transfer, null, 2)}`)\n})\n\n\nstartStream()\n",dart:'\nfinal stream = await client.observeTransfers(\n  operator: "m10.usd",\n  accounts: [ "07800002000000000000000000000002" ]\n);\nawait stream.timeout(new Duration(seconds: 10), onTimeout: (sink) {\n  sink.close();\n  fail("Did not observe message in time");\n}).any((transferResults) =>\n    transferResults.any((result) => result.txId == transaction.txId));\n',cli:"\nm10 observe transfers \\\n  -i 07800002000000000000000000000002\n"},mdxType:"Code"}))}m.isMDXComponent=!0}}]);