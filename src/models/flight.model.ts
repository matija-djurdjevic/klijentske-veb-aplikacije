export interface Flightmodel {
    id: number
    type: {
        id: number
        name: string
    }
    flightKey: string
    flightNumber: string
    destination: string
    scheduledAt: string
    estimatedAt: string | null
    connectedType: string
    connectedFlight: null | string
    plane: string
    gate: null | string
    terminal: string
}