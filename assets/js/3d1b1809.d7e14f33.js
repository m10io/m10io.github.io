"use strict";(self.webpackChunkproduct=self.webpackChunkproduct||[]).push([[518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(f,c(c({ref:t},u),{},{components:n})):a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5624:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),o=n(7685),r=n(7316),c=n(5291),i=n(3894);function s(e){let t=e.code.trim();return a.createElement("div",{className:"code"},a.createElement("div",{className:"code-inner"},a.createElement(o.ZP,{value:t,height:e.height||"auto",theme:r.CP,extensions:[i.ih[e.lang]],readOnly:"true"}),a.createElement(c.Z,{code:t,className:"buttonGroup"})))}},2322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(3894),c=n(5624);const i={},s="Accounts",l={unversionedId:"api/accounts",id:"api/accounts",title:"Accounts",description:"The M10 ledger is made out of a tree of accounts. Every account, besides the root, has a parent. The parent can be thought of in a few ways. Let's think about how most banking systems work around the world.",source:"@site/docs/api/accounts.mdx",sourceDirName:"api",slug:"/api/accounts",permalink:"/api/accounts",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Overview",permalink:"/api/overview"},next:{title:"Actions",permalink:"/api/actions"}},u={},d=[{value:"Model",id:"model",level:2},{value:"API Calls",id:"api-calls",level:2},{value:"Create",id:"create",level:3},{value:"List",id:"list",level:3},{value:"Get",id:"get",level:3}],m={toc:d},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"accounts"},"Accounts"),(0,o.kt)("p",null,"The M10 ledger is made out of a tree of accounts. Every account, besides the root, has a parent. The parent can be thought of in a few ways. Let's think about how most banking systems work around the world.\nYou, dear reader, most likely have an account at some bank. Your bank has an account at your central bank, that holds all of the bank's funds."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"OK, that's not fully the truth. Your bank probably holds its funds partially in physical assets (i.e cold-hard cash), and assets at your central bank. But for simplicity's sake imagine it all at the CB")),(0,o.kt)("p",null,'In the M10 ledger, your account\'s parent is the bank\'s account at the CB. If a key has permission to an account, it also has access to its children.\nTransfers also "walk" the account hierarchy, you can find more details in the transfers docs. If an account has children it is referred to as an "issuance", account\nas it can "issue" funds to its children. Going back to the bank example, imagine you want to take out a loan of some money.\nThe bank does not need the full amount of the loan to give you the funds. Rather it "creates" (or issues) some money to you. The account hierarchy allows this same thing to happen. If your account has children, you can see a recursive sum of all the children\'s balance in the ',(0,o.kt)("inlineCode",{parentName:"p"},"issuance.issued_balance")," field. For instance, this is useful for a bank or central bank to query all the money in their purview. "),(0,o.kt)("img",{src:"/img/account-hierarchy.svg",style:{width:"100%"}}),(0,o.kt)("h2",{id:"model"},"Model"),(0,o.kt)(c.Z,{code:"\nmessage AccountMetadata {\n  bytes owner = 1;\n  string profile_image_url = 9;\n  string name = 10;\n  string public_name = 11;\n  bytes id = 12;\n}\nmessage IndexedAccount { // Account on the Ledgers\n  bytes id = 1;\n  Issuance issuance = 3;\n  uint64 balance = 4;\n  bool frozen = 5;\n  Instrument instrument = 6;\n  uint64 balance_limit = 7;\n  message Issuance {\n    uint64 issued_balance = 1;\n    uint64 non_leaf_children = 2;\n    uint64 leaf_children = 3;\n  }\n}\n",lang:"protobuf",mdxType:"Highlight"}),(0,o.kt)("h2",{id:"api-calls"},"API Calls"),(0,o.kt)("h3",{id:"create"},"Create"),(0,o.kt)(r.ZP,{code:{rust:'\nuse m10_sdk::{AccountBuilder, sdk, account_id, DocumentBuilder, Signer};\n\nlet (_, account_id) = client.create_account(\n\tAccountBuilder::parent(account_id![0]?)\n\t\t.issuance(true)\n\t\t.frozen(false)\n\t\t.balance_limit(1_000_000)).await?;\nclient.documents(\n  DocumentBuilder::default()\n  .insert(sdk::AccountMetadata {\n    id: account_id.to_vec(),\n    owner: client.signer().public_key().to_vec(),\n    profile_image_url: "https://thiscatdoesnotexist.com".to_string(),\n    name: "Alice\'s Cattery".to_string(),\n    public_name: "Alice\'s Cattery".to_string()})).await?;',ts:'\nconst [_txId, accountId] = await ledgerClient.createAccount(\n  new sdk.AccountBuilder(new sdk.AccountId("00000000000000000000000000000000"))\n    .issuance(false)\n    .frozen(false)\n);\nawait ledgerClient.documents(\n  new sdk.DocumentBuilder().insert(sdk.collections.Collection.AccountMetadata, new m10.sdk.model.AccountMetadata({\n    id: accountId.toUint8Array(),\n    name: "Alice\'s Cattery",\n    publicName: "Alice\'s Cattery",\n    owner: operatorSigner.getPublicKey().toUint8Array()\n  }))\n);\n',dart:'\nclient.createAccount(\n   parentId: "0000000000000000",\n   operator: "m10.usd",\n   name: "Alice\'s Cattery",\n   publicName: "Alice\'s Cattery",\n   owner: "wPf1jiymlaF6vdpTko5aBMcy1wnUc/KFvU8HlRgBqmY=",\n   profileImageUrl: "https://thiscatdoesnotexist.com",\n)\n',cli:'println!("test")'},mdxType:"Code"}),(0,o.kt)("h3",{id:"list"},"List"),(0,o.kt)(r.ZP,{code:{rust:'\n//by name\nlet accounts = client.list_account_metadata(\n  m10_sdk::PageBuilder::<uuid::Uuid, m10_sdk::NameOrOwnerFilter>::name("Alice\'s Cattery")\n  ).await?;\n\n//by owner\nlet accounts = client.list_account_metadata(\n  m10_sdk::PageBuilder::<uuid::Uuid, m10_sdk::NameOrOwnerFilter>::owner(\n    m10_sdk::PublicKey(client.signer().public_key().to_vec())\n  )\n).await?;\n',ts:'\nconst accounts = await ledgerClient.listAccounts(new sdk.PageBuilder({\n  filter: {\n    name: "Alice\'s Cattery", // filter by name\n    owner: operatorSigner.getPublicKey() // or filter by owner\n  },\n  limit: 10,\n  lastId: null\n}));\nconsole.log(accounts);\n',dart:'\nclient.findAccountByName(name: "Alice\'s Cattery", operator: "fis.m10.net");\n',cli:'m10 find account --name "Alice\'s Cattery"'},mdxType:"Code"}),(0,o.kt)("h3",{id:"get"},"Get"),(0,o.kt)(r.ZP,{code:{rust:"\nuse m10_sdk::account_id;\n\nlet metadata = client.get_account_metadata(account_id![0, 0; 0]?).await?;\n",ts:"\nconst account = await ledgerClient.getAccount(accountId)\nconsole.log(account);\nconst accountInfo = await ledgerClient.getAccountInfo(accountId)\nconsole.log(accountInfo);\n",dart:'client.getAccountMetadata(userId: "00000000000100000000000000000001", operator: "fis.m10.net");',cli:'m10 get account "00000000000100000000000000000001"'},mdxType:"Code"}))}f.isMDXComponent=!0}}]);