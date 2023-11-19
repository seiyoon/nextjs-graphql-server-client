const resolvers = {
  Query: {
    users: async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();

        return data.users.map((u) => {
          return {
            id: u.id,
            firstName: u.firstName,
            lastName: u.lastName,
            email: u.email,
            username: u.username,
            image: u.image,
          };
        });
      } catch (error) {
        throw new Error("Something went wrong");
      }
    },
    searchUser: async (_, { value }) => {
      try {
        const response = await fetch(
          `https://dummyjson.com/users/search?q=${value}`
        );
        const data = await response.json();

        return data.users.map((u) => {
          return {
            id: u.id,
            firstName: u.firstName,
            lastName: u.lastName,
            email: u.email,
            username: u.username,
            image: u.image,
          };
        });
      } catch (error) {
        throw new Error("Something went wrong");
      }
    },
  },
};

export default resolvers;
