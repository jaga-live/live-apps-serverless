export const handler = async (_event) => {
    try {
        const response = {
            statusCode: 200,
            body: 'Hello World!'
        };
        return response;
    }
    catch (error) {
        return {
            statusCode: 500,
            body: 'Invalid Exception'
        };
    }
};
//# sourceMappingURL=hello.js.map