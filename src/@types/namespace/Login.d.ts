declare namespace NSP {
  export interface VerifyCode {
    error: boolean;
    repCode: string;
    repData: {
      jigsawImageBase64: string;
      originalImageBase64: string;
      result: boolean;
      secretKey: string;
      token: string;
      success?: boolean;
    };
    repMsg?: string;
    success: boolean;
  }

  export interface LoginRes {
    access_token: string;
    active: boolean;
    expires_in: number;
    license: string;
    refresh_token: string;
    scope: string;
    token_type: string;
    user_info: {
      tenantId: number;
    };
  }
}
