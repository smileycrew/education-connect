export const Logout = (navigate) => {


    localStorage.removeItem("user")
    navigate("/")

}