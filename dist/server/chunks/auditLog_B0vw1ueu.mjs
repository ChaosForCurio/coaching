import { d as db, f as auditLogs } from './index_DJ2IURco.mjs';

function logAction(userId, action, entityType, entityId, metadata) {
  db.insert(auditLogs).values({
    user_id: userId,
    action,
    entity_type: entityType,
    entity_id: entityId ?? null,
    metadata: metadata ?? null
  }).catch((err) => {
    console.error("[AuditLog Error]", err?.message ?? err);
  });
}

export { logAction as l };
