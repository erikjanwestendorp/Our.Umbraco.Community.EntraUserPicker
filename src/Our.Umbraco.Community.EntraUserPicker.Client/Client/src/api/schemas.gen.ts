// This file is auto-generated by @hey-api/openapi-ts

export const PagedUserResponseModelSchema = {
    required: ['items', 'total'],
    type: 'object',
    properties: {
        total: {
            type: 'integer',
            format: 'int64'
        },
        items: {
            type: 'array',
            items: {
                oneOf: [
                    {
                        '$ref': '#/components/schemas/UserResponseModel'
                    }
                ]
            }
        }
    },
    additionalProperties: false
} as const;

export const ProblemDetailsSchema = {
    type: 'object',
    properties: {
        type: {
            type: 'string',
            nullable: true
        },
        title: {
            type: 'string',
            nullable: true
        },
        status: {
            type: 'integer',
            format: 'int32',
            nullable: true
        },
        detail: {
            type: 'string',
            nullable: true
        },
        instance: {
            type: 'string',
            nullable: true
        }
    },
    additionalProperties: {}
} as const;

export const UserResponseModelSchema = {
    required: ['displayName', 'key'],
    type: 'object',
    properties: {
        key: {
            type: 'string',
            format: 'uuid'
        },
        displayName: {
            type: 'string'
        },
        email: {
            type: 'string',
            nullable: true
        }
    },
    additionalProperties: false
} as const;