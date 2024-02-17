import connectToMongoDB from "../Day16";

connectToMongoDB();

addUserToDatabase = async (username, email) => {
  try {
    const user = new User({ username, email });
    await user.save();
    console.log("User added to database");
  } catch (error) {
    console.error("Failed to add user to database", error);
  }
};

addUserToDatabase({ username: "john_doe", email: "john@example.com" });
