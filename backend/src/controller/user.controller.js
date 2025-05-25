import User from "../model/User.model.js";

export async function getRecommendedUsers(req, res) {
    try {
        const currentUserId = req.user.id;
        const currentUser = req.user;
        const recommendedUsers  = await User.find({
            $and: [
                {_id: {$ne: currentUserId}}, // exclude current user
                {$id: {$nin: currentUser.friends}}, //exclude current user friends
                {isBoarding: true} // only include users who have completed onboarding
            ]
        })
        res.status(200).json(recommendedUsers)
    } catch (error) {
        console.error("Error in getRecommendedUsers controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getFriends(req, res) {
    try {
        const user = await User.findById(req.user.id).select("friends").populate("friends", "fullName, profilePicture, nativeLanguage, learningLanguage");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user.friends);
    } catch (error) {
        console.error("Error in getFriends controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}