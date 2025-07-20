import User from "../models/User.js";

export async function getRecommendedUsers(req, res){

    try{
        const currentUserId = req.user.id;
        const currentUser = req.user;

        const recommendedUser = await User.find({
           $and:[{ _id: { $ne: currentUserId }},
            {$id: {$nin: currentUser.friends}},
            {isOnBoarded: true}
           ]
        })
        res.status(200).json({success: true, recommendedUser})
    }catch (error) {
        console.error("Error fetching recommended users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getFriendsList(req, res){
    try{
        const user = await User.findById(req.user.id).select("friends")
        .populate("friends", "fullName profilePic nativeLanguage learningLanguage location bio");
        res.status(200).json({success: true, friends: user.friends});
    }catch (error) {
        console.error("Error fetching friends list:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}