import React, {useState} from 'react';
import {ethers} from 'ethers';
import {contractAddress, abi} from './constants.js';


function RegisterVoter(){
    
    

    const callRegister = async()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // await provider.send("eth_requestAccounts",[]);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress,abi, signer);
        
        try {
          const data = await contract.register();
          console.log(`${data}`);
        } catch (error) {
          console.log(`Error ${error}`)
          alert("Chairman cannot register");
          alert("Reset Metamask,Incase of RPC error");
        }
      }

    return(
    <>
     <div>
        <button onClick = {callRegister}>RegisterVoter</button>
     </div>
    </>
    );
}

export default RegisterVoter;