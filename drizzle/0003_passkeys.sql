-- Migration: 0003_passkeys.sql
-- Adds the passkeys table for WebAuthn / Windows Hello credential storage

CREATE TABLE IF NOT EXISTS "passkeys" (
  "id"            SERIAL PRIMARY KEY,
  "user_id"       INTEGER NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
  "credential_id" TEXT NOT NULL UNIQUE,
  "public_key"    TEXT NOT NULL,
  "counter"       INTEGER NOT NULL DEFAULT 0,
  "device_name"   TEXT,
  "created_at"    TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS "passkeys_user_idx" ON "passkeys" ("user_id");
CREATE UNIQUE INDEX IF NOT EXISTS "passkeys_credential_id_idx" ON "passkeys" ("credential_id");
