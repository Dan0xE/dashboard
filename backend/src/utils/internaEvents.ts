type Account = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  githubLinked: boolean;
  githubId?: string;
  githubToken?: string;
  githubUsername?: string;
  githubAvatar?: string;
  githubBio?: string;
  githubCompany?: string;
  githubLocation?: string;
  githubHireable?: boolean;
  githubPublicRepos?: number;
  githubPublicGists?: number;
  githubFollowers?: number;
  githubFollowing?: number;
  githubCreatedAt?: Date;
  githubUpdatedAt?: Date;
  githubHtmlUrl?: string;
  githubReposUrl?: string;
  flagged?: boolean;
  flaggedAt?: Date;
  flaggedReason?: string;
  flaggedBy?: string;
  banned?: boolean;
  bannedAt?: Date;
  bannedReason?: string;
  bannedBy?: string;
  bannedUntil?: Date;
  ipAdress: string;
  lastLogin: Date;
  lastLogout: Date;
  lastLoginIp: string;
  lastLoginUserAgent: string;
  lastLogoutIp: string;
};

export function checkStatus(account: Account) {
  if (!account.githubLinked) {
    return "not-linked";
  }
  if (account.banned) {
    return "banned";
  }
  if (account.flagged) {
    return "flagged";
  }
  return "ok";
}
