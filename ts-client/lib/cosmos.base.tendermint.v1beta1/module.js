// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { GetLatestBlockRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetLatestBlockResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { ProofOps } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Block } from "./types/cosmos/base/tendermint/v1beta1/types";
import { ABCIQueryResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { ProofOp } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetValidatorSetByHeightRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetBlockByHeightResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetSyncingRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetNodeInfoRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetNodeInfoResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { VersionInfo } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Header } from "./types/cosmos/base/tendermint/v1beta1/types";
import { ABCIQueryRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetValidatorSetByHeightResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetLatestValidatorSetResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Validator } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetBlockByHeightRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetLatestValidatorSetRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetSyncingResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Module } from "./types/cosmos/base/tendermint/v1beta1/query";
export { GetLatestBlockRequest, GetLatestBlockResponse, ProofOps, Block, ABCIQueryResponse, ProofOp, GetValidatorSetByHeightRequest, GetBlockByHeightResponse, GetSyncingRequest, GetNodeInfoRequest, GetNodeInfoResponse, VersionInfo, Header, ABCIQueryRequest, GetValidatorSetByHeightResponse, GetLatestValidatorSetResponse, Validator, GetBlockByHeightRequest, GetLatestValidatorSetRequest, GetSyncingResponse, Module };
export const registry = new Registry(msgTypes);
function getStructure(template) {
    const structure = { fields: [] };
    for (let [key, value] of Object.entries(template)) {
        let field = { name: key, type: typeof value };
        structure.fields.push(field);
    }
    return structure;
}
const defaultFee = {
    amount: [],
    gas: "200000",
};
export const txClient = ({ signer, prefix, addr } = { addr: "http://localhost:26657", prefix: "cosmos" }) => {
    return {
        async sendGetLatestBlockRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGetLatestBlockRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.getLatestBlockRequest({ value: GetLatestBlockRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGetLatestBlockRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGetLatestBlockResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGetLatestBlockResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.getLatestBlockResponse({ value: GetLatestBlockResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGetLatestBlockResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendProofOps({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendProofOps: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.proofOps({ value: ProofOps.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendProofOps: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendBlock({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendBlock: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.block({ value: Block.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendBlock: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendABCIQueryResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendABCIQueryResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.abciqueryResponse({ value: ABCIQueryResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendABCIQueryResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendProofOp({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendProofOp: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.proofOp({ value: ProofOp.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendProofOp: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGetValidatorSetByHeightRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGetValidatorSetByHeightRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.getValidatorSetByHeightRequest({ value: GetValidatorSetByHeightRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGetValidatorSetByHeightRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGetBlockByHeightResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGetBlockByHeightResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.getBlockByHeightResponse({ value: GetBlockByHeightResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGetBlockByHeightResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGetSyncingRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGetSyncingRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.getSyncingRequest({ value: GetSyncingRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGetSyncingRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGetNodeInfoRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGetNodeInfoRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.getNodeInfoRequest({ value: GetNodeInfoRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGetNodeInfoRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGetNodeInfoResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGetNodeInfoResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.getNodeInfoResponse({ value: GetNodeInfoResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGetNodeInfoResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendVersionInfo({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendVersionInfo: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.versionInfo({ value: VersionInfo.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendVersionInfo: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendHeader({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendHeader: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.header({ value: Header.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendHeader: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendABCIQueryRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendABCIQueryRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.abciqueryRequest({ value: ABCIQueryRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendABCIQueryRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGetValidatorSetByHeightResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGetValidatorSetByHeightResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.getValidatorSetByHeightResponse({ value: GetValidatorSetByHeightResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGetValidatorSetByHeightResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGetLatestValidatorSetResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGetLatestValidatorSetResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.getLatestValidatorSetResponse({ value: GetLatestValidatorSetResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGetLatestValidatorSetResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendValidator({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendValidator: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.validator({ value: Validator.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendValidator: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGetBlockByHeightRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGetBlockByHeightRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.getBlockByHeightRequest({ value: GetBlockByHeightRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGetBlockByHeightRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGetLatestValidatorSetRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGetLatestValidatorSetRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.getLatestValidatorSetRequest({ value: GetLatestValidatorSetRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGetLatestValidatorSetRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGetSyncingResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGetSyncingResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.getSyncingResponse({ value: GetSyncingResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGetSyncingResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendModule({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendModule: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.module({ value: Module.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendModule: Could not broadcast Tx: ' + e.message);
            }
        },
        getLatestBlockRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest", value: GetLatestBlockRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GetLatestBlockRequest: Could not create message: ' + e.message);
            }
        },
        getLatestBlockResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse", value: GetLatestBlockResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GetLatestBlockResponse: Could not create message: ' + e.message);
            }
        },
        proofOps({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOps", value: ProofOps.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:ProofOps: Could not create message: ' + e.message);
            }
        },
        block({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.Block", value: Block.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Block: Could not create message: ' + e.message);
            }
        },
        abciqueryResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryResponse", value: ABCIQueryResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:ABCIQueryResponse: Could not create message: ' + e.message);
            }
        },
        proofOp({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOp", value: ProofOp.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:ProofOp: Could not create message: ' + e.message);
            }
        },
        getValidatorSetByHeightRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest", value: GetValidatorSetByHeightRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GetValidatorSetByHeightRequest: Could not create message: ' + e.message);
            }
        },
        getBlockByHeightResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse", value: GetBlockByHeightResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GetBlockByHeightResponse: Could not create message: ' + e.message);
            }
        },
        getSyncingRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest", value: GetSyncingRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GetSyncingRequest: Could not create message: ' + e.message);
            }
        },
        getNodeInfoRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest", value: GetNodeInfoRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GetNodeInfoRequest: Could not create message: ' + e.message);
            }
        },
        getNodeInfoResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse", value: GetNodeInfoResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GetNodeInfoResponse: Could not create message: ' + e.message);
            }
        },
        versionInfo({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo", value: VersionInfo.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:VersionInfo: Could not create message: ' + e.message);
            }
        },
        header({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.Header", value: Header.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Header: Could not create message: ' + e.message);
            }
        },
        abciqueryRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryRequest", value: ABCIQueryRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:ABCIQueryRequest: Could not create message: ' + e.message);
            }
        },
        getValidatorSetByHeightResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse", value: GetValidatorSetByHeightResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GetValidatorSetByHeightResponse: Could not create message: ' + e.message);
            }
        },
        getLatestValidatorSetResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse", value: GetLatestValidatorSetResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GetLatestValidatorSetResponse: Could not create message: ' + e.message);
            }
        },
        validator({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.Validator", value: Validator.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Validator: Could not create message: ' + e.message);
            }
        },
        getBlockByHeightRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest", value: GetBlockByHeightRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GetBlockByHeightRequest: Could not create message: ' + e.message);
            }
        },
        getLatestValidatorSetRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest", value: GetLatestValidatorSetRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GetLatestValidatorSetRequest: Could not create message: ' + e.message);
            }
        },
        getSyncingResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse", value: GetSyncingResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GetSyncingResponse: Could not create message: ' + e.message);
            }
        },
        module({ value }) {
            try {
                return { typeUrl: "/cosmos.base.tendermint.v1beta1.Module", value: Module.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Module: Could not create message: ' + e.message);
            }
        },
    };
};
export const queryClient = ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseURL: addr });
};
class SDKModule {
    constructor(client) {
        this.registry = [];
        this.query = queryClient({ addr: client.env.apiURL });
        this.updateTX(client);
        this.structure = {};
        client.on('signer-changed', (signer) => {
            this.updateTX(client);
        });
    }
    updateTX(client) {
        const methods = txClient({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: client.env.prefix ?? "cosmos",
        });
        this.tx = methods;
        for (let m in methods) {
            this.tx[m] = methods[m].bind(this.tx);
        }
    }
}
;
const IgntModule = (test) => {
    return {
        module: {
            CosmosBaseTendermintV1Beta1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default IgntModule;
