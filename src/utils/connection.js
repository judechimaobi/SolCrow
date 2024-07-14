import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

const network = clusterApiUrl('devnet');
export const connection = new Connection(network, 'confirmed');
export const programId = new PublicKey('6BLPdL9narQPFQsqS7AXuRBRS4VoyKmHHzdwkgnLaAps');
