export declare type BaseTransaction = {
    to: string;
    value: string;
    data: string;
};
export declare type Bytes = ArrayLike<number>;
export declare type BytesLike = Bytes | string;
export declare type GetTxBySafeTxHashParams = {
    safeTxHash: string;
};
export interface SendTransactionRequestParams {
    safeTxGas?: number;
}
export interface SendTransactionsParams {
    txs: BaseTransaction[];
    params?: SendTransactionRequestParams;
}
export declare type GetBalanceParams = {
    currency?: string;
};
export declare type SignMessageParams = {
    message: BytesLike;
};
export declare type SendTransactionsResponse = {
    safeTxHash: string;
};
export declare type SafeInfo = {
    safeAddress: string;
    chainId: number;
    threshold: number;
    owners: string[];
};
