// import React, { useState } from "react";

// const Uses = () => {
//   const [Users, setUsers] = useState(true);
//   const [Providers, setProviders] = useState(false);
//   const [Stakers, setStakers] = useState(false);
//   let userActive = () => {
//     setUsers(true);
//     setProviders(false);
//     setStakers(false);
//   };
//   let providersActive = () => {
//     setUsers(false);
//     setProviders(true);
//     setStakers(false);
//   };
//   let stakersActive = () => {
//     setUsers(false);
//     setProviders(false);
//     setStakers(true);
//   };
//   return (
//     <section className="MuiPaper-root jss281 MuiPaper-elevation0">
//       <div className="MuiContainer-root MuiContainer-maxWidthLg">
//         <div
//           className="jss282"
//           style={{ paddingBottom: "0px", marginBottom: "120px" }}
//         >
//           <div>
//             <div style={{ paddingBottom: "0px" }} />
//             <div style={{ paddingTop: "76px", transform: "translateZ(0px)" }}>
//               <div className="jss283">Who Uses ANKR?</div>
//               <div className="jss284">ANKR Powers our Network</div>
//               <div className="jss285">
//                 <div
//                   className={Users ? "jss286 jss288" : "jss286"}
//                   onClick={userActive}
//                 >
//                   Users
//                 </div>
//                 <div
//                   className={Providers ? "jss286 jss288" : "jss286"}
//                   onClick={providersActive}
//                 >
//                   Providers
//                 </div>
//                 <div
//                   className={Stakers ? "jss286 jss288" : "jss286"}
//                   onClick={stakersActive}
//                 >
//                   Stakers
//                 </div>
//               </div>
//               {Users && (
//                 <div>
//                   <div className="jss289">Spend ANKR to use Ankr Network</div>
//                   <div className="jss290">
//                     ANKR gives users access to Ankr Network, the most
//                     decentralized infrastructure protocol in existence. With a
//                     flexible and affordable pay-as-you-go model, users spend
//                     ANKR to make requests to the different blockchains they need
//                     to communicate with.
//                   </div>
//                   <div className="jss291">
//                     <svg
//                       width={13}
//                       height={12}
//                       viewBox="0 0 13 12"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M2.757 6.767l-.78-.625-1.25 1.562.78.625 1.25-1.562zm3.285 3.908l-.625.781a1 1 0 0 0 1.468-.244l-.843-.537zm6.316-8.063l.537-.844L11.208.694l-.537.844 1.687 1.074zM1.508 8.329l3.91 3.127 1.248-1.562-3.909-3.127-1.25 1.562zm5.377 2.883l5.473-8.6-1.687-1.074-5.473 8.6 1.687 1.074z"
//                         fill="#356DF3"
//                       />
//                     </svg>
//                     Pay for premium RPC services with ANKR
//                   </div>
//                 </div>
//               )}
//               {Providers && (
//                 <div>
//                   <div className="jss289">
//                     Deposit ANKR, become a provider, earn rewards
//                   </div>
//                   <div className="jss290">
//                     To become a node provider on Ankr Network, you must deposit
//                     ANKR tokens as collateral to help ensure honest and optimal
//                     network participation. Once you’ve made your deposit and
//                     started providing your node(s), you’ll earn rewards for
//                     serving traffic in the form of ANKR tokens.
//                   </div>
//                   <div className="jss291">
//                     <svg
//                       width={13}
//                       height={12}
//                       viewBox="0 0 13 12"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M2.757 6.767l-.78-.625-1.25 1.562.78.625 1.25-1.562zm3.285 3.908l-.625.781a1 1 0 0 0 1.468-.244l-.843-.537zm6.316-8.063l.537-.844L11.208.694l-.537.844 1.687 1.074zM1.508 8.329l3.91 3.127 1.248-1.562-3.909-3.127-1.25 1.562zm5.377 2.883l5.473-8.6-1.687-1.074-5.473 8.6 1.687 1.074z"
//                         fill="#356DF3"
//                       />
//                     </svg>
//                     Deposit ANKR to become a node provider
//                   </div>
//                   <div className="jss291">
//                     <svg
//                       width={13}
//                       height={12}
//                       viewBox="0 0 13 12"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M2.757 6.767l-.78-.625-1.25 1.562.78.625 1.25-1.562zm3.285 3.908l-.625.781a1 1 0 0 0 1.468-.244l-.843-.537zm6.316-8.063l.537-.844L11.208.694l-.537.844 1.687 1.074zM1.508 8.329l3.91 3.127 1.248-1.562-3.909-3.127-1.25 1.562zm5.377 2.883l5.473-8.6-1.687-1.074-5.473 8.6 1.687 1.074z"
//                         fill="#356DF3"
//                       />
//                     </svg>
//                     Earn ANKR rewards for serving traffic
//                   </div>
//                   <div className="jss291">
//                     <svg
//                       width={13}
//                       height={12}
//                       viewBox="0 0 13 12"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M2.757 6.767l-.78-.625-1.25 1.562.78.625 1.25-1.562zm3.285 3.908l-.625.781a1 1 0 0 0 1.468-.244l-.843-.537zm6.316-8.063l.537-.844L11.208.694l-.537.844 1.687 1.074zM1.508 8.329l3.91 3.127 1.248-1.562-3.909-3.127-1.25 1.562zm5.377 2.883l5.473-8.6-1.687-1.074-5.473 8.6 1.687 1.074z"
//                         fill="#356DF3"
//                       />
//                     </svg>
//                     21% of total Ankr Network fees are distributed to providers
//                   </div>
//                 </div>
//               )}
//               {Stakers && (
//                 <div>
//                   <div className="jss289">Stake ANKR and earn rewards</div>
//                   <div className="jss290">
//                     ANKR token holders can stake their assets with Ankr Network
//                     full node providers to earn a share of their rewards for
//                     serving network traffic. Plus, retain liquidity while you
//                     stake with ANKR liquid staking.
//                   </div>
//                   <div className="jss291">
//                     <svg
//                       width={13}
//                       height={12}
//                       viewBox="0 0 13 12"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M2.757 6.767l-.78-.625-1.25 1.562.78.625 1.25-1.562zm3.285 3.908l-.625.781a1 1 0 0 0 1.468-.244l-.843-.537zm6.316-8.063l.537-.844L11.208.694l-.537.844 1.687 1.074zM1.508 8.329l3.91 3.127 1.248-1.562-3.909-3.127-1.25 1.562zm5.377 2.883l5.473-8.6-1.687-1.074-5.473 8.6 1.687 1.074z"
//                         fill="#356DF3"
//                       />
//                     </svg>
//                     49% of total Ankr Network fees are distributed to stakers
//                   </div>
//                   <div className="jss291">
//                     <svg
//                       width={13}
//                       height={12}
//                       viewBox="0 0 13 12"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M2.757 6.767l-.78-.625-1.25 1.562.78.625 1.25-1.562zm3.285 3.908l-.625.781a1 1 0 0 0 1.468-.244l-.843-.537zm6.316-8.063l.537-.844L11.208.694l-.537.844 1.687 1.074zM1.508 8.329l3.91 3.127 1.248-1.562-3.909-3.127-1.25 1.562zm5.377 2.883l5.473-8.6-1.687-1.074-5.473 8.6 1.687 1.074z"
//                         fill="#356DF3"
//                       />
//                     </svg>
//                     Stake ANKR to earn high rewards
//                   </div>
//                   <div className="jss291">
//                     <svg
//                       width={13}
//                       height={12}
//                       viewBox="0 0 13 12"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M2.757 6.767l-.78-.625-1.25 1.562.78.625 1.25-1.562zm3.285 3.908l-.625.781a1 1 0 0 0 1.468-.244l-.843-.537zm6.316-8.063l.537-.844L11.208.694l-.537.844 1.687 1.074zM1.508 8.329l3.91 3.127 1.248-1.562-3.909-3.127-1.25 1.562zm5.377 2.883l5.473-8.6-1.687-1.074-5.473 8.6 1.687 1.074z"
//                         fill="#356DF3"
//                       />
//                     </svg>
//                     Participate in the DAO and vote on important issues
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//           <img
//             className="jss292 jss295"
//             src="https://www.ankr.com/_next/static/images/circulation-2a5810d5c5b79c7cf43ff0dc8eff9c4e.png"
//             alt=""
//             style={{ marginTop: "76px" }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Uses;

import React, { useState } from "react";
import "./Uses.css";
const Uses = () => {
  const [Users, setUsers] = useState(true);
  const [Providers, setProviders] = useState(false);
  const [Stakers, setStakers] = useState(false);
  let userActive = () => {
    setUsers(true);
    setProviders(false);
    setStakers(false);
  };
  let providersActive = () => {
    setUsers(false);
    setProviders(true);
    setStakers(false);
  };
  let stakersActive = () => {
    setUsers(false);
    setProviders(false);
    setStakers(true);
  };
  return (
    <section className="MuiPaper-root jss281 MuiPaper-elevation0">
      <div className="MuiContainer-root MuiContainer-maxWidthLg">
        <div
          className="customU1"
          style={{ paddingBottom: "0px", marginBottom: "120px" }}
        >
          <div>
            <div style={{ paddingBottom: "0px" }} />
            <div style={{ paddingTop: "76px", transform: "translateZ(0px)" }}>
              <div className="customU2">Who Uses ANKR?</div>
              <div className="customU3">ANKR Powers our Network</div>
              <div className="customU4">
                <div
                  className={Users ? "customU5 customU6" : "customU5"}
                  onClick={userActive}
                >
                  Users
                </div>
                <div
                  className={Providers ? "customU5 customU6" : "customU5"}
                  onClick={providersActive}
                >
                  Providers
                </div>
                <div
                  className={Stakers ? "customU5 customU6" : "customU5"}
                  onClick={stakersActive}
                >
                  Stakers
                </div>
              </div>
              {Users && (
                <div>
                  <div className="cutomU7">Spend ANKR to use Ankr Network</div>
                  <div className="customU8">
                    ANKR gives users access to Ankr Network, the most
                    decentralized infrastructure protocol in existence. With a
                    flexible and affordable pay-as-you-go model, users spend
                    ANKR to make requests to the different blockchains they need
                    to communicate with.
                  </div>
                  <div className="cutomU9">
                    <svg
                      width={13}
                      height={12}
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.757 6.767l-.78-.625-1.25 1.562.78.625 1.25-1.562zm3.285 3.908l-.625.781a1 1 0 0 0 1.468-.244l-.843-.537zm6.316-8.063l.537-.844L11.208.694l-.537.844 1.687 1.074zM1.508 8.329l3.91 3.127 1.248-1.562-3.909-3.127-1.25 1.562zm5.377 2.883l5.473-8.6-1.687-1.074-5.473 8.6 1.687 1.074z"
                        fill="#356DF3"
                      />
                    </svg>
                    Pay for premium RPC services with ANKR
                  </div>
                </div>
              )}
              {Providers && (
                <div>
                  <div className="cutomU7">
                    Deposit ANKR, become a provider, earn rewards
                  </div>
                  <div className="customU8">
                    To become a node provider on Ankr Network, you must deposit
                    ANKR tokens as collateral to help ensure honest and optimal
                    network participation. Once you’ve made your deposit and
                    started providing your node(s), you’ll earn rewards for
                    serving traffic in the form of ANKR tokens.
                  </div>
                  <div className="cutomU9">
                    <svg
                      width={13}
                      height={12}
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.757 6.767l-.78-.625-1.25 1.562.78.625 1.25-1.562zm3.285 3.908l-.625.781a1 1 0 0 0 1.468-.244l-.843-.537zm6.316-8.063l.537-.844L11.208.694l-.537.844 1.687 1.074zM1.508 8.329l3.91 3.127 1.248-1.562-3.909-3.127-1.25 1.562zm5.377 2.883l5.473-8.6-1.687-1.074-5.473 8.6 1.687 1.074z"
                        fill="#356DF3"
                      />
                    </svg>
                    Deposit ANKR to become a node provider
                  </div>
                  <div className="cutomU9">
                    <svg
                      width={13}
                      height={12}
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.757 6.767l-.78-.625-1.25 1.562.78.625 1.25-1.562zm3.285 3.908l-.625.781a1 1 0 0 0 1.468-.244l-.843-.537zm6.316-8.063l.537-.844L11.208.694l-.537.844 1.687 1.074zM1.508 8.329l3.91 3.127 1.248-1.562-3.909-3.127-1.25 1.562zm5.377 2.883l5.473-8.6-1.687-1.074-5.473 8.6 1.687 1.074z"
                        fill="#356DF3"
                      />
                    </svg>
                    Earn ANKR rewards for serving traffic
                  </div>
                  <div className="cutomU9">
                    <svg
                      width={13}
                      height={12}
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.757 6.767l-.78-.625-1.25 1.562.78.625 1.25-1.562zm3.285 3.908l-.625.781a1 1 0 0 0 1.468-.244l-.843-.537zm6.316-8.063l.537-.844L11.208.694l-.537.844 1.687 1.074zM1.508 8.329l3.91 3.127 1.248-1.562-3.909-3.127-1.25 1.562zm5.377 2.883l5.473-8.6-1.687-1.074-5.473 8.6 1.687 1.074z"
                        fill="#356DF3"
                      />
                    </svg>
                    21% of total Ankr Network fees are distributed to providers
                  </div>
                </div>
              )}
              {Stakers && (
                <div>
                  <div className="cutomU7">Stake ANKR and earn rewards</div>
                  <div className="customU8">
                    ANKR token holders can stake their assets with Ankr Network
                    full node providers to earn a share of their rewards for
                    serving network traffic. Plus, retain liquidity while you
                    stake with ANKR liquid staking.
                  </div>
                  <div className="cutomU9">
                    <svg
                      width={13}
                      height={12}
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.757 6.767l-.78-.625-1.25 1.562.78.625 1.25-1.562zm3.285 3.908l-.625.781a1 1 0 0 0 1.468-.244l-.843-.537zm6.316-8.063l.537-.844L11.208.694l-.537.844 1.687 1.074zM1.508 8.329l3.91 3.127 1.248-1.562-3.909-3.127-1.25 1.562zm5.377 2.883l5.473-8.6-1.687-1.074-5.473 8.6 1.687 1.074z"
                        fill="#356DF3"
                      />
                    </svg>
                    49% of total Ankr Network fees are distributed to stakers
                  </div>
                  <div className="cutomU9">
                    <svg
                      width={13}
                      height={12}
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.757 6.767l-.78-.625-1.25 1.562.78.625 1.25-1.562zm3.285 3.908l-.625.781a1 1 0 0 0 1.468-.244l-.843-.537zm6.316-8.063l.537-.844L11.208.694l-.537.844 1.687 1.074zM1.508 8.329l3.91 3.127 1.248-1.562-3.909-3.127-1.25 1.562zm5.377 2.883l5.473-8.6-1.687-1.074-5.473 8.6 1.687 1.074z"
                        fill="#356DF3"
                      />
                    </svg>
                    Stake ANKR to earn high rewards
                  </div>
                  <div className="cutomU9">
                    <svg
                      width={13}
                      height={12}
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.757 6.767l-.78-.625-1.25 1.562.78.625 1.25-1.562zm3.285 3.908l-.625.781a1 1 0 0 0 1.468-.244l-.843-.537zm6.316-8.063l.537-.844L11.208.694l-.537.844 1.687 1.074zM1.508 8.329l3.91 3.127 1.248-1.562-3.909-3.127-1.25 1.562zm5.377 2.883l5.473-8.6-1.687-1.074-5.473 8.6 1.687 1.074z"
                        fill="#356DF3"
                      />
                    </svg>
                    Participate in the DAO and vote on important issues
                  </div>
                </div>
              )}
            </div>
          </div>
          <img
            className="jss292 jss295"
            src="https://www.ankr.com/_next/static/images/circulation-2a5810d5c5b79c7cf43ff0dc8eff9c4e.png"
            alt=""
            style={{ marginTop: "76px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Uses;
