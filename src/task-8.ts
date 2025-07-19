enum Role {
  Admin,
  User,
  Guest
}

const getPermissions = (role: Role): string[] => {
    switch (role) {
        case Role.Admin:
            return ["create", "read", "update", "delete"]
        case Role.User:
            return ["read", "update"]
        case Role.Guest:
            return ["read"]
    }
    
 }

getPermissions(Role.Admin);