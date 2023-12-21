export interface BadgeInfoBase {
  color: string;
  logo: string;
  logoColor: string;
}

export interface BadgeInfo extends BadgeInfoBase {
  subject: string;
}
