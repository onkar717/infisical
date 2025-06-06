// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const IdentityGcpAuthsSchema = z.object({
  id: z.string().uuid(),
  accessTokenTTL: z.coerce.number().default(7200),
  accessTokenMaxTTL: z.coerce.number().default(7200),
  accessTokenNumUsesLimit: z.coerce.number().default(0),
  accessTokenTrustedIps: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  identityId: z.string().uuid(),
  type: z.string(),
  allowedServiceAccounts: z.string().nullable().optional(),
  allowedProjects: z.string().nullable().optional(),
  allowedZones: z.string().nullable().optional(),
  accessTokenPeriod: z.coerce.number().default(0)
});

export type TIdentityGcpAuths = z.infer<typeof IdentityGcpAuthsSchema>;
export type TIdentityGcpAuthsInsert = Omit<z.input<typeof IdentityGcpAuthsSchema>, TImmutableDBKeys>;
export type TIdentityGcpAuthsUpdate = Partial<Omit<z.input<typeof IdentityGcpAuthsSchema>, TImmutableDBKeys>>;
