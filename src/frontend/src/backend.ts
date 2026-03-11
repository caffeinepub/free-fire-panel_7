// Auto-generated backend stub — no Motoko canister for this frontend-only project

import type { ActorConfig, Agent, Identity } from "@icp-sdk/core/agent";

export interface CreateActorOptions {
  agentOptions?: { identity?: Identity };
  agent?: Agent;
  actorConfig?: ActorConfig;
  processError?: (e: unknown) => never;
}

export class ExternalBlob {
  private _url?: string;
  private _bytes?: Uint8Array;
  onProgress?: (progress: number) => void;

  static fromURL(url: string): ExternalBlob {
    const b = new ExternalBlob();
    b._url = url;
    return b;
  }

  getURL(): string | undefined {
    return this._url;
  }

  async getBytes(): Promise<Uint8Array> {
    if (this._bytes) return this._bytes;
    if (this._url) {
      const res = await fetch(this._url);
      const buf = await res.arrayBuffer();
      return new Uint8Array(buf);
    }
    return new Uint8Array();
  }
}

export interface backendInterface {
  _initializeAccessControlWithSecret(token: string): Promise<void>;
}

export function createActor(
  _canisterId: string,
  _uploadFile: (file: ExternalBlob) => Promise<Uint8Array>,
  _downloadFile: (bytes: Uint8Array) => Promise<ExternalBlob>,
  _options?: CreateActorOptions,
): Promise<backendInterface> {
  return Promise.resolve({
    _initializeAccessControlWithSecret: async () => {},
  });
}
