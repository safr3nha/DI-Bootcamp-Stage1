class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

const video1 = new Video("Coding Basics", "Alice", 300);
video1.watch();

const video2 = new Video("JavaScript Tips", "Bob", 120);
video2.watch();

const videoData = [
  { title: "Intro to CSS", uploader: "Charlie", time: 450 },
  { title: "React Tutorial", uploader: "Dana", time: 1200 },
  { title: "Node.js Guide", uploader: "Eve", time: 900 },
  { title: "SQL for Beginners", uploader: "Frank", time: 600 },
  { title: "AI Concepts", uploader: "Grace", time: 1500 }
];

const videoInstances = videoData.map(data => new Video(data.title, data.uploader, data.time));

videoInstances.forEach(video => video.watch());