
const routes = {
    "/": "/src/views/home.html",
    "/login": "/src/views/login.html",
    "/notFound": "/src/views/notFound.html",
    "/dashboard": "/src/views/dashboard.html",
    "/register": "/src/views/register.html",
};

export async function renderRoute() {
    const path = window.location.pathname;
    const route = routes[path];

    if (!route) {
        location.href = "/notFound";
        return renderRoute();
    }

};