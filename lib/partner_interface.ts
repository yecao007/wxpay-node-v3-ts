// 订单金额信息
interface Iamount {
  total: number;
  currency?: string;
}
// 优惠功能
interface Idetail {
  cost_price?: number;
  invoice_id?: string;
  goods_detail?: IgoodsDetail[];
}
// 单品列表信息
interface IgoodsDetail {
  merchant_goods_id: string;
  wechatpay_goods_id?: string;
  goods_name?: string;
  quantity: number;
  unit_price: number;
}
// 支付场景描述
interface IsceneInfoH5 {
  payer_client_ip: string;
  device_id?: string;
  store_info?: IstoreInfo;
  h5_info: Ih5Info;
}
interface IsceneInfoNative {
  payer_client_ip: string;
  device_id?: string;
  store_info?: IstoreInfo;
}
// 商户门店信息
interface IstoreInfo {
  id: string;
  name?: string;
  area_code?: string;
  address?: string;
}
// H5场景信息
interface Ih5Info {
  type: string;
  app_name: string;
  app_url?: string;
  bundle_id?: string;
  package_name?: string;
}

export interface IpartnerH5 {
  sp_appid?: string;
  sp_mchid?: string;
  sub_appid?: string;
  sub_mchid: string;
  description: string;
  out_trade_no: string;
  time_expire?: string;
  attach?: string;
  notify_url: string;
  goods_tag?: string;
  amount: Iamount;
  detail?: Idetail;
  scene_info: IsceneInfoH5;
  settle_info?: { profit_sharing?: boolean };
}

export interface IpartnerNative {
  sp_appid?: string;
  sp_mchid?: string;
  sub_appid?: string;
  sub_mchid: string;
  description: string;
  out_trade_no: string;
  time_expire?: string;
  attach?: string;
  notify_url: string;
  goods_tag?: string;
  support_fapiao?: boolean;
  amount: Iamount;
  detail?: Idetail;
  scene_info?: IsceneInfoNative;
  settle_info?: { profit_sharing?: boolean };
}

export interface IpartnerJsapi {
  sp_appid?: string;
  sp_mchid?: string;
  sub_appid?: string;
  sub_mchid: string;
  description: string;
  out_trade_no: string;
  time_expire?: string;
  attach?: string;
  notify_url: string;
  goods_tag?: string;
  amount: Iamount;
  payer: { sub_openid?: string; sp_openid?: string };
  detail?: Idetail;
  scene_info?: IsceneInfoNative;
}

export interface IpartnerApp {
  sp_appid?: string;
  sp_mchid?: string;
  sub_appid?: string;
  sub_mchid: string;
  description: string;
  out_trade_no: string;
  time_expire?: string;
  attach?: string;
  notify_url: string;
  goods_tag?: string;
  amount: Iamount;
  detail?: Idetail;
  scene_info?: IsceneInfoNative;
}

export interface IpartnerQuery1 {
  transaction_id: string;
  out_trade_no?: string;
  sub_mchid: string;
}
export interface IpartnerQuery2 {
  transaction_id?: string;
  out_trade_no: string;
  sub_mchid: string;
}

export interface IpartnerClose {
  out_trade_no: string;
  sub_mchid: string;
}

// 服务商分账相关接口
export interface IpartnerProfitSharingReceivers {
  /** 分账接收方类型 */
  type: 'MERCHANT_ID' | 'PERSONAL_OPENID';
  /** 分账接收方账号 */
  account: string;
  /** 分账个人接收方姓名 */
  name?: string;
  /** 分账金额 */
  amount: number;
  /** 分账描述 */
  description: string;
}

export interface IpartnerCreateProfitSharingOrders {
  /** 服务商商户号 */
  sp_mchid?: string;
  /** 子商户号 */
  sub_mchid: string;
  /** 微信订单号 */
  transaction_id: string;
  /** 商户分账单号 */
  out_order_no: string;
  /** 分账接收方列表 */
  receivers: IpartnerProfitSharingReceivers[];
  /** 是否解冻剩余未分资金 */
  unfreeze_unsplit: boolean;
  /** 当有敏感信息加密 必填 */
  wx_serial_no?: string;
}

export interface IpartnerProfitSharingReturnOrders {
  /** 服务商商户号 */
  sp_mchid?: string;
  /** 子商户号 */
  sub_mchid: string;
  /** 微信分账单号 */
  order_id?: string;
  /** 商户分账单号 */
  out_order_no?: string;
  /** 商户回退单号 */
  out_return_no: string;
  /** 回退商户号 */
  return_mchid: string;
  /** 回退金额 */
  amount: number;
  /** 回退描述 */
  description: string;
}

export interface IpartnerProfitsharingOrdersUnfreeze {
  /** 服务商商户号 */
  sp_mchid?: string;
  /** 子商户号 */
  sub_mchid: string;
  /** 微信订单号 */
  transaction_id: string;
  /** 商户分账单号 */
  out_order_no: string;
  /** 分账描述 */
  description: string;
}

export interface IpartnerProfitSharingReceiversAdd {
  /** 服务商商户号 */
  sp_mchid?: string;
  /** 子商户号 */
  sub_mchid: string;
  /** 应用ID */
  appid?: string;
  /** 分账接收方类型 */
  type: string;
  /** 分账接收方账号 */
  account: string;
  /** 分账个人接收方姓名 */
  name?: string;
  /** 与分账方的关系类型 */
  relation_type: string;
  /** 自定义的分账关系 */
  custom_relation?: string;
  /** 当有敏感信息加密 必填 */
  wx_serial_no?: string;
}

export interface IpartnerProfitSharingReceiversDelete {
  /** 服务商商户号 */
  sp_mchid?: string;
  /** 子商户号 */
  sub_mchid: string;
  /** 应用ID */
  appid?: string;
  /** 分账接收方类型 */
  type: string;
  /** 分账接收方账号 */
  account: string;
}

export interface IpartnerProfitSharingQuery1 {
  /** 服务商商户号 */
  sp_mchid?: string;
  /** 子商户号 */
  sub_mchid: string;
  /** 微信订单号 */
  transaction_id: string;
  /** 商户分账单号 */
  out_order_no: string;
}

export interface IpartnerProfitSharingQuery2 {
  /** 服务商商户号 */
  sp_mchid?: string;
  /** 子商户号 */
  sub_mchid: string;
  /** 微信分账单号 */
  order_id: string;
}
