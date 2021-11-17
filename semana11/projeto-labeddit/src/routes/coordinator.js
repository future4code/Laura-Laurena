export const goToLoginPage = (history) => {
    history.push("/login")
}
export const goToSingUpPage = (history) => {
    history.push("/cadastro")
}
export const goToFeedPage = (history) => {
    history.push("/")
}
export const goToPostPage = (history, id) => {
    history.push(`/post/${id}`)
}
