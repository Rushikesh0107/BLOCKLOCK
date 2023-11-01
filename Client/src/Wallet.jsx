import { useEffect, useState } from "react";
import Header from "./Header";
import { Navigate } from "react-router-dom";

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  return (
    <>
    <div className="w-full flex flex-col mt-20 items-center gap-3">
        <div>
            <label htmlFor="username" className="font-bold text-xl">
                Name:
            </label>
            <input 
            type="text" 
            id="username" 
            name="username" 
            className="border-2 border-gray-400 rounded-md w-48 mx-auto ml-2 p-2"
            placeholder="Enter your name"
            />
        </div>

        <div>
            <label htmlFor="username" className="font-bold text-xl">
                Key:
            </label>
            <input 
            type="text" 
            id="username" 
            name="username" 
            className="border-2 border-gray-400 rounded-md w-48 mx-auto ml-2 p-2"
            placeholder="Enter your Key"
            />
        </div>
              <button
                className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded w-48 mx-auto"
                onClick={connectWallet}
              >
                <span className="is-link has-text-weight-bold">
                  {walletAddress && walletAddress.length > 0
                    ? `Connected: ${walletAddress.substring(
                        0,
                        6
                      )}...${walletAddress.substring(38)}`
                    : "Connect Wallet"}
                </span>
              </button>

              {walletAddress && walletAddress.length > 0 ? (
                        <Navigate to="/controls" /> 
                    ) : (<div className="">
                        <h1 className="text-2xl text-red-500 font-bold">You are not CONNECTED</h1>
                    </div>)}
    </div>
    </>
  );
}


export default App;