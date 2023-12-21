interface BadgeInfoBase {
  color: string;
  logo: string;
  logoColor: string;
}

interface BadgeInfo extends BadgeInfoBase {
  subject: string;
}
