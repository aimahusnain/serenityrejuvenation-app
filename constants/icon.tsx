import { Feather } from "@expo/vector-icons";

export const icon = {
    index: (props: any) => <Feather name="home" {...props} />,
    treatments: (props: any) => <Feather name="grid" {...props} />,
    bookings: (props: any) => <Feather name="calendar" {...props} />,
    profile: (props: any) => <Feather name="user" {...props} />,
}
