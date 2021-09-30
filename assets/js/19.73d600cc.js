(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{410:function(e,t,a){"use strict";a.r(t);var r=a(5),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"troubleshoot-validator-problems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshoot-validator-problems"}},[e._v("#")]),e._v(" Troubleshoot validator problems")]),e._v(" "),a("p",[e._v("Here are some common problems you might encounter when you run a validator node and their solutions.")]),e._v(" "),a("h2",{attrs:{id:"validator-has-0-voting-power"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator-has-0-voting-power"}},[e._v("#")]),e._v(" Validator has 0 voting power")]),e._v(" "),a("p",[e._v("If your validator has 0 voting power, your validator has become auto-unbonded. On the mainnet, validators unbond when they do not vote on "),a("code",[e._v("9500")]),e._v(" of the last "),a("code",[e._v("10000")]),e._v(" blocks ("),a("code",[e._v("50")]),e._v(" of the last "),a("code",[e._v("100")]),e._v(" blocks on the testnet). Because blocks are proposed every ~5 seconds, a validator that is unresponsive for ~13 hours (~4 minutes on testnet) become unbonded. This problem usually happens when your "),a("code",[e._v("terrad")]),e._v(" process crashes.")]),e._v(" "),a("p",[e._v("To return the voting power back to your validator:")]),e._v(" "),a("ol",[a("li",[e._v("If "),a("code",[e._v("terrad")]),e._v(" is not running, restart it:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("terrad start\n")])])]),a("ol",[a("li",[e._v("Wait for your full node to reach the latest block, and run:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("terrad tx slashing unjail "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("terra"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --chain-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("chain_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("from"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("where")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("<terra>")]),e._v(" is the address of your validator account.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<name>")]),e._v(" is the name of the validator account. To find this information, run "),a("code",[e._v("terrad keys list")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("If you don't wait for "),a("code",[e._v("terrad")]),e._v(" to sync before running "),a("code",[e._v("unjail")]),e._v(", an error message will inform you that your validator is still jailed.")])])])]),e._v(" "),a("ol",[a("li",[e._v("Check your validator again to see if your voting power is back:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("terrad status\n")])])]),a("p",[e._v("If your voting power is less than it was previously, it's less because you were slashed for downtime.")]),e._v(" "),a("h2",{attrs:{id:"terrad-crashes-because-of-too-many-open-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terrad-crashes-because-of-too-many-open-files"}},[e._v("#")]),e._v(" Terrad crashes because of too many open files")]),e._v(" "),a("p",[e._v("The default number of files Linux can open per process is "),a("code",[e._v("1024")]),e._v(". "),a("code",[e._v("terrad")]),e._v(" is known to open more than this amount, causing the process to crash. To fix this problem:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Increase the number of open files allowed by running "),a("code",[e._v("ulimit -n 4096")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Restart the process with "),a("code",[e._v("terrad start")]),e._v(".")])])]),e._v(" "),a("p",[e._v("If you are using "),a("code",[e._v("systemd")]),e._v(" or another process manager to launch "),a("code",[e._v("terrad")]),e._v(", you might need to configure them. The following  sample "),a("code",[e._v("systemd")]),e._v(" file fixes the problem:")]),e._v(" "),a("div",{staticClass:"language-systemd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# /etc/systemd/system/terrad.service\n[Unit]\nDescription=Terra Columbus Node\nAfter=network.target\n\n[Service]\nType=simple\nUser=ubuntu\nWorkingDirectory=/home/ubuntu\nExecStart=/home/ubuntu/go/bin/terrad start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\n")])])]),a("h2",{attrs:{id:"oracle-voting-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle-voting-error"}},[e._v("#")]),e._v(" Oracle voting error")]),e._v(" "),a("p",[e._v("You might receive the following error message by the "),a("a",{attrs:{href:"https://github.com/terra-money/oracle-feeder",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terra Oracle feeder"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("`broadcast error: code: 3, raw_log: validator does not exist: terravaloperxxx`\n")])])]),a("p",[e._v("This message occurs for the following reasons:")]),e._v(" "),a("h3",{attrs:{id:"the-validator-is-not-active"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-validator-is-not-active"}},[e._v("#")]),e._v(" The validator is not active")]),e._v(" "),a("p",[e._v("The validator might not be active for one of the following reasons:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The validator is jailed. To solve this problem, "),a("code",[e._v("unjail")]),e._v(" the validator by running:")]),e._v(" "),a("p",[a("code",[e._v("terrad tx slashing unjail <terra> --chain-id=<chain_id> --from=<from>")])])]),e._v(" "),a("li",[a("p",[e._v("The validator is not in the active "),a("a",{attrs:{href:"https://docs.terra.money/validators.html#delegations",target:"_blank",rel:"noopener noreferrer"}},[e._v("validator set"),a("OutboundLink")],1),e._v(". Only the top 130 validators are in this set. To fix this problem, increase your total stake so that it is included in the top 130.")])])]),e._v(" "),a("h3",{attrs:{id:"the-network-is-wrong"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-network-is-wrong"}},[e._v("#")]),e._v(" The network is wrong.")]),e._v(" "),a("p",[e._v("The oracle feeder might be submitting to the wrong network. To fix this problem, run the feeder with the lite client daemon (LCD) specified:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("nom start vote --"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --source http://localhost:8532/latest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --lcd "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${LCD}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --chain-id "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${CHAIN_ID}")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --validator "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${VALIDATOR_KEY}")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --password "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${PASSWORD}")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n")])])]),a("p",[e._v("The LCD to which the voter is connecting might be running from a different network than your node. The remote LCD for different networks are:")]),e._v(" "),a("ul",[a("li",[e._v("https://lcd.terra.dev for the Columbus mainnet")]),e._v(" "),a("li",[e._v("https://bombay-lcd.terra.dev for the Bombay testnet")])]),e._v(" "),a("p",[e._v("Ensure you specify the LCD for the same network to which your node is connecting.")]),e._v(" "),a("p",[e._v("If you run a "),a("a",{attrs:{href:"https://docs.terra.money/terrad/lcd.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("local LCD"),a("OutboundLink")],1),e._v(" (for example, localhost:1317), ensure your LCD is connecting to the same node.")])])}),[],!1,null,null,null);t.default=o.exports}}]);