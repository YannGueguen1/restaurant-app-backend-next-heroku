module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      graphql: {
        endpoint: "/graphql",
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 7,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    };
  }

  return {
    //Empty config which will use defaults
  };
};
