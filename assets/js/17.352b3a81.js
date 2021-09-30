(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{408:function(e,t,a){"use strict";a.r(t);var r=a(5),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"set-up-an-oracle-feeder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-an-oracle-feeder"}},[e._v("#")]),e._v(" Set up an oracle feeder")]),e._v(" "),a("p",[e._v("Every Terra validator must participate in the oracle process and periodically submit a vote for the exchange rate of Luna in all whitelisted denominations. Because this process occurs every 30 seconds, validators must set up an automated process to avoid getting slashed and jailed.")]),e._v(" "),a("h2",{attrs:{id:"make-a-new-key-for-oracle-votes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-a-new-key-for-oracle-votes"}},[e._v("#")]),e._v(" Make a new key for oracle votes")]),e._v(" "),a("p",[e._v("You can separate the keys used for controlling a validator account from those that are submitting oracle votes on behalf of a validator. Run:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("terrad keys "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("feeder"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("Show the feeder account details:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("terrad keys show "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("feeder"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("h2",{attrs:{id:"delegate-feeder-consent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delegate-feeder-consent"}},[e._v("#")]),e._v(" Delegate feeder consent")]),e._v(" "),a("p",[e._v("The account address used to submit oracle voting transactions is called a "),a("code",[e._v("feeder")]),e._v(". When you set up your oracle voting process for the first time, you must delegate the feeder permission to an account.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("terrad tx oracle set-feeder "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("feeder-address"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("validator"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("h2",{attrs:{id:"send-funds-to-the-feeder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-funds-to-the-feeder"}},[e._v("#")]),e._v(" Send funds to the feeder")]),e._v(" "),a("p",[e._v("The feeder needs funds to pay for transaction fees to submit oracle voting messages. TerraKRW, not Luna, are used for oracle voting fees because the smallest atomic unit of TerraKRW is much cheaper than Luna. You can send TerraKRW to your feeder address or send Luna and perform an on-chain swap by running the following command:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("terrad tx send "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("from-address"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("feeder-address"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("luna-amount"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("uluna\n")])])]),a("p",[a("strong",[e._v("Syntax of a swap from the feeder")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("terrad tx market swap "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("luna-amount"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("uluna ukrw --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("feeder"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("h2",{attrs:{id:"set-up-oracle-feeder-program"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-oracle-feeder-program"}},[e._v("#")]),e._v(" Set up oracle feeder program")]),e._v(" "),a("p",[e._v("To start submitting oracle messages with your feeder account, install one of the following oracle feeder implementations and set it up:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Software")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Developer")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Runtime")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/terra-money/oracle-feeder",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("oracle-feeder")]),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[e._v("Terra")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Node.js")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/b-harvest/terra_oracle_voter",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("terra_oracle_voter")]),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://bharvest.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("B-Harvest"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Python")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/node-a-team/terra-oracle",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("terra-oracle")]),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://nodeateam.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node A-Team"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Go")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);