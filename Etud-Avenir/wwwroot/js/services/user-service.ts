import UserDTO from "../types/user-dto";

export const getUserInformations = async (): Promise<UserDTO> => {
    const result = await fetch("/Identity/Me");
    if (!result.ok || result.redirected) return null;

    return await result.json();
}