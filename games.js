const GAMES = [
  // Format: { file: "filename.html", title: "Display Title", tags: ["mobile", "pc"], image: "filename.jpg", featured: true, locked: true, lockReason: "Reason", lockedBy: "Owner/Admin" }
  // Tags: "mobile" = works on mobile, "pc" = works on computer, "both" = works everywhere
  // Image: put the image file in the /images/ folder
  // featured: true = shows in featured row at top, remove or set to false for regular games
  // locked: true = game is locked, shows lock icon, redirects to game-locked page
  // lockReason: Reason shown on game-locked page (only used if locked: true)
  // lockedBy: Who locked it - "Owner" or "Admin" (only used if locked: true)
  
  // UNLOCKED GAMES
  { 
    file: "neonObby.html", 
    title: "Neon Obby", 
    tags: ["pc"], 
    image: "neonobby.jpg", 
    featured: false, 
    locked: false,
    lockReason: "", 
    lockedBy: "" 
  },
  
  { 
    file: "MobilePlatformer.html", 
    title: "Space Platformer", 
    tags: ["mobile"], 
    image: "MobilePlatformer.jpg", 
    featured: false, 
    locked: false,
    lockReason: "", 
    lockedBy: "" 
  },
  
  { 
    file: "grass.html", 
    title: "Grass Render", 
    tags: ["mobile", "pc"], 
    image: "grass.jpg", 
    featured: false, 
    locked: false,
    lockReason: "", 
    lockedBy: "" 
  },
  
  { 
    file: "Shapes.html", 
    title: "Tap the shapes!", 
    tags: ["mobile","pc"], 
    image: "Shapes.jpg", 
    featured: true, 
    locked: false,
    lockReason: "", 
    lockedBy: "" 
  },
  
  // LOCKED GAMES
  { 
    file: "Obby.html", 
    title: "Obby", 
    tags: ["mobile", "pc"], 
    image: "Obby.jpg", 
    featured: true, 
    locked: true, 
    lockReason: "Game is being updated with new levels", 
    lockedBy: "Owner (Alex)" 
  },
  
  { 
    file: "Linux.html", 
    title: "Linux Terminal Simulator", 
    tags: ["mobile","pc"], 
    image: "Linux.jpg", 
    featured: false,
    locked: true,
    lockReason: "Under review for inappropriate content",
    lockedBy: "Admin" 
  }
  
  // Add new games below this line
  // Make sure to add matching images to the /images/ folder!
];