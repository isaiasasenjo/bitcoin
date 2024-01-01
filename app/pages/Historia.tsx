import styles from "../styles/Home.module.css";
const Historia = () => {
  return (
    <div className={styles.container}>
      <h3>Breve historia de Bitcoin</h3>

      <p>
        Bitcoin was created in 2009 by Satoshi Nakamoto, a pseudonymous
        developer. Bitcoin is designed to be completely decentralized and not
        controlled by any single authority. With a total supply of 21 million,
        its scarcity and decentralized nature make it almost impossible to
        inflate or manipulate. For this reason, many consider bitcoin to be the
        ultimate store of value or ‘Digital Gold’. Bitcoin is fully open-source
        and operates on a proof-of-work blockchain, a shared public ledger and
        history of transactions organized into -blocks- that are -chained-
        together to prevent tampering. This technology creates a permanent
        record of each transaction. Users on the Bitcoin network verify
        transactions through a process known as mining, which is designed to
        confirm new transactions are consistent with older transactions that
        have been confirmed in the past, ensuring users can not spend a Bitcoin
        they don’t have or attempt to double-spend coins.
      </p>

      <p>
        New coins are created as part of the Bitcoin mining process. Bitcoins
        are rewarded to miners who operate computer systems that help to secure
        the network and validate incoming transactions. These Bitcoin miners run
        full nodes and use specialized hardware otherwise known as Application
        Specific Integrated Circuit Chips (ASICs) to find and generate new
        blocks. Once a series of computationally demanding problems have been
        solved a completed -block- is added to the ever-growing -chain-, this
        mining process can fluctuate and become easier or harder depending on
        network demand and value, this is known as the network difficulty.
        Besides block rewards, miners also collect transaction fees which
        further incentivizes them to secure the network and verify transactions.
        This independent network of miners also decreases the chance for fraud
        or false information to be recorded, as the majority of miners need to
        confirm the authenticity of each block of data before it is added to the
        blockchain, in a process known as -proof of work.-
      </p>
    </div>
  );
};
export default Historia;
