"use strict";(self.webpackChunkproduct=self.webpackChunkproduct||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"sidebar":[{"type":"link","label":"Home","href":"/","docId":"intro"},{"type":"link","label":"Overview","href":"/overview","docId":"overview"},{"type":"link","label":"Quickstart","href":"/quickstart","docId":"quickstart"},{"type":"category","label":"API Docs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/api/overview","docId":"api/overview"},{"type":"link","label":"Accounts","href":"/api/accounts","docId":"api/accounts"},{"type":"link","label":"Actions","href":"/api/actions","docId":"api/actions"},{"type":"link","label":"Banks","href":"/api/banks","docId":"api/banks"},{"type":"link","label":"Role Bindings","href":"/api/role-bindings","docId":"api/role-bindings"},{"type":"link","label":"Roles","href":"/api/roles","docId":"api/roles"},{"type":"link","label":"Transfers","href":"/api/transfers","docId":"api/transfers"}],"href":"/category/api-docs"}]},"docs":{"api/accounts":{"id":"api/accounts","title":"Accounts","description":"The M10 ledger is made out of a tree of accounts. Every account, besides the root, has a parent. The parent can be thought of in a few ways. Let\'s think about how most banking systems work around the world.","sidebar":"sidebar"},"api/actions":{"id":"api/actions","title":"Actions","description":"Transfers are great when we want to send money to an account, but what if we want to send a message? \u2014 Actions fill that gap.","sidebar":"sidebar"},"api/banks":{"id":"api/banks","title":"Banks","description":"\\"Banks\\" on the ledger are used by our dashboard product, the CBDC admin, to determine which accounts are associated with which bank on the ledger. The \\"bank\\" object is just metadata and doesn\'t impact the functionality of the core ledger. Rather, services like the CBDC admin use the bank object to discover information about existing accounts on the ledger.","sidebar":"sidebar"},"api/overview":{"id":"api/overview","title":"Overview","description":"The M10 Ledger provides an easy-to-use and expressive API for interacting with our platform. The M10 API uses gRPC for the transport mechanism, but you will mostly interact","sidebar":"sidebar"},"api/role-bindings":{"id":"api/role-bindings","title":"Role Bindings","description":"Role bindings bind together roles, but what does that mean? In essence, they connect a public key to a role. If you want to grant a user permissions you first need a Role with those permissions. Then you need to grant their public-key access to those permissions using a role binding.","sidebar":"sidebar"},"api/roles":{"id":"api/roles","title":"Roles","description":"Roles (along with their partner Role Bindings) are the two core elements of M10\'s permissions system. They group together a set of permissions on resources into a single object. For instance you might have a Role called bank-admin that allows a user to create or read accounts. Or you might have a role called \\"viewer\\" which allows a user to view all resources. Roles are only useful once they are \\"bound\\" to a specific key using a Role Binding.","sidebar":"sidebar"},"api/transfers":{"id":"api/transfers","title":"Transfers","description":"Transfers are the way of sending funds from one account to another. Each transfer on the M10 ledger is made up of multiple transfer steps.","sidebar":"sidebar"},"intro":{"id":"intro","title":"Home","description":"The M10 Ledger Platform is a distributed database designed with the needs of central banks in mind. It is highly performant, flexible, and easy-to-use. Here you will find details on how to operate, use, and understand the ledger.","sidebar":"sidebar"},"overview":{"id":"overview","title":"Overview","description":"M10\'s ledger is a distributed database for storing financial transactions. In many ways, it is similar to traditional databases you might be familiar with such as PostgresSQL or MongoDB, but there are some key distinctions. For one the ledger is specialized in storing financial data, and small amounts of metadata. The ledger is also permissioned; every operation needs to be signed by a key. Keys are granted access through our RBAC (role-based-access control) system. The ledger is also very high-performance achieving 1M TPS in certain configurations.","sidebar":"sidebar"},"quickstart":{"id":"quickstart","title":"Quickstart","description":"This guide walks through how to use the M10 SDK & CLI to create a new digital currency \\"My Bucks\\", currency code MYB. We will also create two bank issuance accounts, a customer account for each bank, issue funds and transfer between them. You will be assuming the role of the each participant throughout the process to better understand how the M10 Platform serves as an API for interaction between all network members.","sidebar":"sidebar"}}}')}}]);