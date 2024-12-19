interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export const formatAddress = (address: Address): string => {
    return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
};

export const handleError = (error: unknown): string => {
    console.error("An error occurred:", error);
    return "Something went wrong. Please try again later.";
};