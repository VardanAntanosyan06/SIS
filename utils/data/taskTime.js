const timeTasks = [
  {
     task_id:1,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:1,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:1,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:1,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:2,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:2,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:2,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:2,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:3,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:3,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:3,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:3,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:4,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:4,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:4,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:4,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:5,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:5,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:5,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:5,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:6,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:6,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:6,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:6,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:7,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:7,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:7,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:7,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:8,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:8,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:8,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:8,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:9,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:9,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:9,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:9,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:10,
     taskSpentWeek:"up to 4 weeks",
     taskSpentDays:28,
     point:2
  },
  {
     task_id:10,
     taskSpentWeek:"5-7 weeks",
     taskSpentDays:49,
     point:1.5
  },
  {
     task_id:10,
     taskSpentWeek:"8-9 weeks",
     taskSpentDays:63,
     point:1
  },
  {
     task_id:10,
     taskSpentWeek:"10 & more weeks",
     taskSpentDays:70,
     point:0.5
  },
  {
     task_id:11,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:11,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:11,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:11,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:12,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:12,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:12,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:12,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:13,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:13,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:13,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:13,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:14,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:14,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:14,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:14,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:15,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:15,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:15,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:15,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:16,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:16,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:16,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:16,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:17,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:17,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:17,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:17,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:18,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:18,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:18,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:18,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:19,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:19,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:19,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:19,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:18,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:18,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:18,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:18,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:20,
     taskSpentWeek:"up to 4 weeks",
     taskSpentDays:28,
     point:2
  },
  {
     task_id:20,
     taskSpentWeek:"5-7 weeks",
     taskSpentDays:49,
     point:1.5
  },
  {
     task_id:20,
     taskSpentWeek:"8-9 weeks",
     taskSpentDays:63,
     point:1
  },
  {
     task_id:20,
     taskSpentWeek:"up to 10 weeks",
     taskSpentDays:70,
     point:0.5
  },
  {
     task_id:21,
     taskSpentWeek:"8-10 weeks",
     taskSpentDays:70,
     point:2
  },
  {
     task_id:21,
     taskSpentWeek:"11-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:21,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:21,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:22,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:22,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:22,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:22,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:23,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:23,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:23,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:23,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:24,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:24,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:24,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:24,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:25,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:25,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:25,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:25,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:26,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:26,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:26,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:26,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:27,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:27,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:27,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:27,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:28,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:28,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:28,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:28,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:29,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:29,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:29,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:29,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:30,
     taskSpentWeek:"up to 4 weeks",
     taskSpentDays:28,
     point:2
  },
  {
     task_id:30,
     taskSpentWeek:"5-7 weeks",
     taskSpentDays:49,
     point:1.5
  },
  {
     task_id:30,
     taskSpentWeek:"8-9 weeks",
     taskSpentDays:63,
     point:1
  },
  {
     task_id:30,
     taskSpentWeek:"10 & more weeks",
     taskSpentDays:70,
     point:0.5
  },
  {
     task_id:31,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:31,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:31,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:31,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:32,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:32,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:32,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:32,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:33,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:33,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:33,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:33,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:34,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:34,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:34,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:34,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:35,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:35,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:35,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:35,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:36,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:3
  },
  {
     task_id:36,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2.5
  },
  {
     task_id:36,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:2
  },
  {
     task_id:36,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:1
  },
  {
     task_id:37,
     taskSpentWeek:"up to 4 weeks",
     taskSpentDays:28,
     point:2
  },
  {
     task_id:37,
     taskSpentWeek:"5-7 weeks",
     taskSpentDays:49,
     point:1.5
  },
  {
     task_id:37,
     taskSpentWeek:"8-9 weeks",
     taskSpentDays:63,
     point:1
  },
  {
     task_id:37,
     taskSpentWeek:"10 & more weeks",
     taskSpentDays:70,
     point:0.5
  },
  {
     task_id:38,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:3
  },
  {
     task_id:38,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2.5
  },
  {
     task_id:38,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:2
  },
  {
     task_id:38,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:1
  },
  {
     task_id:39,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:3
  },
  {
     task_id:39,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2.5
  },
  {
     task_id:39,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:2
  },
  {
     task_id:39,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:1
  },
  {
     task_id:40,
     taskSpentWeek:"up to 4 weeks",
     taskSpentDays:28,
     point:2
  },
  {
     task_id:40,
     taskSpentWeek:"5-7 weeks",
     taskSpentDays:49,
     point:1.5
  },
  {
     task_id:40,
     taskSpentWeek:"8-9 weeks",
     taskSpentDays:63,
     point:1
  },
  {
     task_id:40,
     taskSpentWeek:"10 & more weeks",
     taskSpentDays:70,
     point:0.5
  },
  {
     task_id:41,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:41,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:41,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:41,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:42,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:42,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:42,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:42,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:43,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:43,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:43,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:43,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:44,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:44,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:44,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:44,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:45,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:45,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:45,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:45,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:46,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:46,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2.5
  },
  {
     task_id:46,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:2
  },
  {
     task_id:46,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:47,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:47,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:47,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:47,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:48,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:48,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:48,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:48,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:49,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:49,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:49,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:49,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:50,
     taskSpentWeek:"up to 4 weeks",
     taskSpentDays:28,
     point:2
  },
  {
     task_id:50,
     taskSpentWeek:"5-7 weeks",
     taskSpentDays:49,
     point:1.5
  },
  {
     task_id:50,
     taskSpentWeek:"8-9 weeks",
     taskSpentDays:63,
     point:1
  },
  {
     task_id:50,
     taskSpentWeek:"10 & more weeks",
     taskSpentDays:70,
     point:0.5
  },
  {
     task_id:51,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:51,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2.5
  },
  {
     task_id:51,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:2
  },
  {
     task_id:51,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:52,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:52,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2.5
  },
  {
     task_id:52,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:2
  },
  {
     task_id:52,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:53,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:53,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2.5
  },
  {
     task_id:53,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:2
  },
  {
     task_id:53,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:54,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:54,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2.5
  },
  {
     task_id:54,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:2
  },
  {
     task_id:54,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:55,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:55,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2.5
  },
  {
     task_id:55,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:2
  },
  {
     task_id:55,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:56,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:56,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2.5
  },
  {
     task_id:56,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:2
  },
  {
     task_id:56,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:57,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:57,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:57,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:57,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:58,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:58,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:58,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:58,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:59,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:59,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:59,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:59,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:60,
     taskSpentWeek:"up to 4 weeks",
     taskSpentDays:28,
     point:2
  },
  {
     task_id:60,
     taskSpentWeek:"5-7 weeks",
     taskSpentDays:49,
     point:1.5
  },
  {
     task_id:60,
     taskSpentWeek:"8-9 weeks",
     taskSpentDays:63,
     point:1
  },
  {
     task_id:60,
     taskSpentWeek:"10 & more weeks",
     taskSpentDays:70,
     point:0.5
  },
  {
     task_id:61,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:61,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2.5
  },
  {
     task_id:61,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:2
  },
  {
     task_id:61,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:62,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:62,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:62,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:62,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:63,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:63,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:63,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:63,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:64,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:64,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:64,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:64,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:65,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:65,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:65,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:65,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:66,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:66,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:66,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:66,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:67,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:67,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:67,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:67,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:68,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:68,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:68,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:68,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:69,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:69,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:69,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:69,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:70,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:2
  },
  {
     task_id:70,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:1.5
  },
  {
     task_id:70,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:70,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:71,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:71,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:71,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:71,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:72,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:72,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:72,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:72,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:73,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:73,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:73,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:73,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:74,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:74,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:74,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:74,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:75,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:75,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:75,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:75,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:76,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:76,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:76,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:76,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:77,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:77,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:77,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:77,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:78,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:78,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:78,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:78,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:79,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:79,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:79,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:79,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:80,
     taskSpentWeek:"up to 4 weeks",
     taskSpentDays:28,
     point:2
  },
  {
     task_id:80,
     taskSpentWeek:"5-7 weeks",
     taskSpentDays:49,
     point:1.5
  },
  {
     task_id:80,
     taskSpentWeek:"8-9 weeks",
     taskSpentDays:63,
     point:1
  },
  {
     task_id:80,
     taskSpentWeek:"10 & more weeks",
     taskSpentDays:70,
     point:0.5
  },
  {
     task_id:81,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:81,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:81,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:81,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:82,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:82,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:82,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:82,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:83,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:83,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:83,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:83,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:84,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:84,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:84,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:84,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:85,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:85,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:85,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:85,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:86,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:86,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:86,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:86,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:87,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:87,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:87,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:87,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:88,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:88,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:88,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:88,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:89,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:89,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:89,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:89,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:90,
     taskSpentWeek:"up to 4 weeks",
     taskSpentDays:28,
     point:2
  },
  {
     task_id:90,
     taskSpentWeek:"5-7 weeks",
     taskSpentDays:49,
     point:1.5
  },
  {
     task_id:90,
     taskSpentWeek:"8-9 weeks",
     taskSpentDays:63,
     point:1
  },
  {
     task_id:90,
     taskSpentWeek:"10 & more weeks",
     taskSpentDays:70,
     point:0.5
  },
  {
     task_id:91,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:91,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:91,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:91,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:92,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:92,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:92,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:92,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:93,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:93,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:93,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:93,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:94,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:94,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:94,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:94,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:95,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:95,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:95,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:95,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:96,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:96,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:96,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:96,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:97,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:97,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:97,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:97,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:98,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:98,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:98,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:98,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:99,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:99,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:99,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:99,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:100,
     taskSpentWeek:"up to 4 weeks",
     taskSpentDays:28,
     point:2
  },
  {
     task_id:100,
     taskSpentWeek:"5-7 weeks",
     taskSpentDays:49,
     point:1.5
  },
  {
     task_id:100,
     taskSpentWeek:"8-9 weeks",
     taskSpentDays:63,
     point:1
  },
  {
     task_id:100,
     taskSpentWeek:"10 & more weeks",
     taskSpentDays:70,
     point:0.5
  },
  {
     task_id:101,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:101,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:101,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:101,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:102,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:102,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:102,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:102,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:103,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:103,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:103,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:103,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:104,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:104,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:104,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:104,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:105,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:105,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:105,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:105,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:106,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:106,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:106,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:106,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:107,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:107,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:107,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:107,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:108,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:108,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:108,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:108,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:109,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:109,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:109,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:109,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:110,
     taskSpentWeek:"up to 4 weeks",
     taskSpentDays:28,
     point:2
  },
  {
     task_id:110,
     taskSpentWeek:"5-7 weeks",
     taskSpentDays:49,
     point:1.5
  },
  {
     task_id:110,
     taskSpentWeek:"8-9 weeks",
     taskSpentDays:63,
     point:1
  },
  {
     task_id:110,
     taskSpentWeek:"10 & more weeks",
     taskSpentDays:70,
     point:0.5
  },
  {
     task_id:111,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:111,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:111,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:111,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:112,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:112,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:112,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:112,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:113,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:113,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:113,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:113,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:114,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:114,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:114,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:114,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:115,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:115,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:115,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:115,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:116,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:116,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:116,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:116,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:117,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:117,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:117,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:117,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:118,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:118,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:118,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:118,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:119,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:119,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:119,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:119,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:120,
     taskSpentWeek:"up to 4 weeks",
     taskSpentDays:28,
     point:2
  },
  {
     task_id:120,
     taskSpentWeek:"5-7 weeks",
     taskSpentDays:49,
     point:1.5
  },
  {
     task_id:120,
     taskSpentWeek:"8-9 weeks",
     taskSpentDays:63,
     point:1
  },
  {
     task_id:120,
     taskSpentWeek:"10 & more weeks",
     taskSpentDays:70,
     point:0.5
  },
  {
     task_id:121,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:121,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:121,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:121,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:122,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:122,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:122,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:122,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:123,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:123,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:123,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:123,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:124,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:124,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:124,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:124,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:125,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:125,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:125,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:125,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:126,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:126,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:126,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:126,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:127,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:127,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:127,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:127,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:128,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:128,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:128,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:128,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:129,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:129,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:129,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:129,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:130,
     taskSpentWeek:"up to 4 weeks",
     taskSpentDays:28,
     point:2
  },
  {
     task_id:130,
     taskSpentWeek:"5-7 weeks",
     taskSpentDays:49,
     point:1.5
  },
  {
     task_id:130,
     taskSpentWeek:"8-9 weeks",
     taskSpentDays:63,
     point:1
  },
  {
     task_id:130,
     taskSpentWeek:"10 & more weeks",
     taskSpentDays:70,
     point:0.5
  },
  {
     task_id:131,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:131,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:131,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:131,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:132,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:132,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:132,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:132,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:133,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:133,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:133,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:133,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:134,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:134,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:134,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:134,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:135,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:135,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:135,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:135,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:136,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:136,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:136,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:136,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:137,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:137,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:137,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:137,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:138,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:138,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:138,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:138,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:139,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:139,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:139,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:139,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:140,
     taskSpentWeek:"up to 4 weeks",
     taskSpentDays:28,
     point:3
  },
  {
     task_id:140,
     taskSpentWeek:"5-7 weeks",
     taskSpentDays:49,
     point:2
  },
  {
     task_id:140,
     taskSpentWeek:"8-9 weeks",
     taskSpentDays:63,
     point:1
  },
  {
     task_id:140,
     taskSpentWeek:"10 & more weeks",
     taskSpentDays:70,
     point:0.5
  },
  {
     task_id:141,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:141,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:141,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:141,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:142,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:142,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:142,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:142,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:143,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:143,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:143,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:143,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:144,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:144,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:144,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:144,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:145,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:145,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:145,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:145,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:146,
     taskSpentWeek:"up to 6 weeks",
     taskSpentDays:42,
     point:3
  },
  {
     task_id:146,
     taskSpentWeek:"7-9 weeks",
     taskSpentDays:63,
     point:2
  },
  {
     task_id:146,
     taskSpentWeek:"10-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:146,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:147,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:147,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:147,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:147,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:148,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:148,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:148,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:148,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:149,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:149,
     taskSpentWeek:"6-8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:149,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1
  },
  {
     task_id:149,
     taskSpentWeek:"11 & more weeks",
     taskSpentDays:77,
     point:0.5
  },
  {
     task_id:150,
     taskSpentWeek:"up to 4 weeks",
     taskSpentDays:28,
     point:3
  },
  {
     task_id:150,
     taskSpentWeek:"5-7 weeks",
     taskSpentDays:49,
     point:2
  },
  {
     task_id:150,
     taskSpentWeek:"8-9 weeks",
     taskSpentDays:63,
     point:1
  },
  {
     task_id:150,
     taskSpentWeek:"10 & more weeks",
     taskSpentDays:70,
     point:0.5
  },
  {
     task_id:151,
     taskSpentWeek:"up to 12 weeks",
     taskSpentDays:84,
     point:3
  },
  {
     task_id:151,
     taskSpentWeek:"13-14 weeks",
     taskSpentDays:98,
     point:2
  },
  {
     task_id:151,
     taskSpentWeek:"15-16 weeks",
     taskSpentDays:112,
     point:1
  },
  {
     task_id:151,
     taskSpentWeek:"17 & more weeks",
     taskSpentDays:119,
     point:0.5
  },
  {
     task_id:152,
     taskSpentWeek:"up to 32 weeks",
     taskSpentDays:224,
     point:4
  },
  {
     task_id:152,
     taskSpentWeek:"33-34 weeks",
     taskSpentDays:238,
     point:2
  },
  {
     task_id:152,
     taskSpentWeek:"35-36 weeks",
     taskSpentDays:252,
     point:1
  },
  {
     task_id:152,
     taskSpentWeek:"37 & more weeks",
     taskSpentDays:259,
     point:0.5
  },
  {
     task_id:153,
     taskSpentWeek:"up to 28 weeks",
     taskSpentDays:196,
     point:3
  },
  {
     task_id:153,
     taskSpentWeek:"29-30 weeks",
     taskSpentDays:210,
     point:2
  },
  {
     task_id:153,
     taskSpentWeek:"31-32 weeks",
     taskSpentDays:224,
     point:1.5
  },
  {
     task_id:153,
     taskSpentWeek:"33 & more weeks",
     taskSpentDays:231,
     point:1
  },
  {
     task_id:154,
     taskSpentWeek:"up to 24 weeks",
     taskSpentDays:168,
     point:4
  },
  {
     task_id:154,
     taskSpentWeek:"25-26 weeks",
     taskSpentDays:182,
     point:3
  },
  {
     task_id:154,
     taskSpentWeek:"27-28 weeks",
     taskSpentDays:196,
     point:2
  },
  {
     task_id:154,
     taskSpentWeek:"29 & more weeks",
     taskSpentDays:203,
     point:1
  },
  {
     task_id:155,
     taskSpentWeek:"up to 12 weeks",
     taskSpentDays:84,
     point:3.5
  },
  {
     task_id:155,
     taskSpentWeek:"13-14 weeks",
     taskSpentDays:98,
     point:3
  },
  {
     task_id:155,
     taskSpentWeek:"15-16 weeks",
     taskSpentDays:112,
     point:2.5
  },
  {
     task_id:155,
     taskSpentWeek:"17 & more weeks",
     taskSpentDays:119,
     point:2
  },
  {
     task_id:156,
     taskSpentWeek:"up to 36 weeks",
     taskSpentDays:252,
     point:4
  },
  {
     task_id:156,
     taskSpentWeek:"37-18 weeks",
     taskSpentDays:126,
     point:2
  },
  {
     task_id:156,
     taskSpentWeek:"39-40 weeks",
     taskSpentDays:280,
     point:1
  },
  {
     task_id:156,
     taskSpentWeek:"41 & more weeks",
     taskSpentDays:287,
     point:0.5
  },
  {
     task_id:157,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:2.5
  },
  {
     task_id:157,
     taskSpentWeek:"6-7 weeks",
     taskSpentDays:49,
     point:2
  },
  {
     task_id:157,
     taskSpentWeek:"8-9 weeks",
     taskSpentDays:63,
     point:1.5
  },
  {
     task_id:157,
     taskSpentWeek:"10 & more weeks",
     taskSpentDays:70,
     point:0.5
  },
  {
     task_id:158,
     taskSpentWeek:"up to 24 weeks",
     taskSpentDays:168,
     point:2
  },
  {
     task_id:158,
     taskSpentWeek:"25-26 weeks",
     taskSpentDays:182,
     point:1.5
  },
  {
     task_id:158,
     taskSpentWeek:"27-28 weeks",
     taskSpentDays:196,
     point:1
  },
  {
     task_id:158,
     taskSpentWeek:"29 & more weeks",
     taskSpentDays:203,
     point:0.5
  },
  {
     task_id:159,
     taskSpentWeek:"up to 12 weeks",
     taskSpentDays:84,
     point:1.5
  },
  {
     task_id:159,
     taskSpentWeek:"13-14 weeks",
     taskSpentDays:98,
     point:1
  },
  {
     task_id:159,
     taskSpentWeek:"15-16 weeks",
     taskSpentDays:112,
     point:0.5
  },
  {
     task_id:159,
     taskSpentWeek:"17 & more weeks",
     taskSpentDays:119,
     point:0.5
  },
  {
     task_id:160,
     taskSpentWeek:"up to 5 weeks",
     taskSpentDays:35,
     point:3
  },
  {
     task_id:160,
     taskSpentWeek:"6-7 weeks",
     taskSpentDays:49,
     point:1.5
  },
  {
     task_id:160,
     taskSpentWeek:"8-9 weeks",
     taskSpentDays:63,
     point:1
  },
  {
     task_id:160,
     taskSpentWeek:"10 & more weeks",
     taskSpentDays:70,
     point:0.5
  },
  {
     task_id:161,
     taskSpentWeek:"up to 26 weeks",
     taskSpentDays:182,
     point:5
  },
  {
     task_id:161,
     taskSpentWeek:"28-30 weeks",
     taskSpentDays:210,
     point:4
  },
  {
     task_id:161,
     taskSpentWeek:"32-34 weeks",
     taskSpentDays:238,
     point:3.5
  },
  {
     task_id:161,
     taskSpentWeek:"36 & more weeks",
     taskSpentDays:252,
     point:3
  },
  {
     task_id:162,
     taskSpentWeek:"up to 26 weeks",
     taskSpentDays:182,
     point:5
  },
  {
     task_id:162,
     taskSpentWeek:"28-30 weeks",
     taskSpentDays:210,
     point:4
  },
  {
     task_id:162,
     taskSpentWeek:"32-34 weeks",
     taskSpentDays:238,
     point:3.5
  },
  {
     task_id:162,
     taskSpentWeek:"36 & more weeks",
     taskSpentDays:252,
     point:3
  },
  {
     task_id:163,
     taskSpentWeek:"up to 25 weeks",
     taskSpentDays:175,
     point:5
  },
  {
     task_id:163,
     taskSpentWeek:"27-29 weeks",
     taskSpentDays:203,
     point:4
  },
  {
     task_id:163,
     taskSpentWeek:"31-33 weeks",
     taskSpentDays:231,
     point:3.5
  },
  {
     task_id:163,
     taskSpentWeek:"35 & more weeks",
     taskSpentDays:245,
     point:3
  },
  {
     task_id:164,
     taskSpentWeek:"up to 24 weeks",
     taskSpentDays:168,
     point:2.5
  },
  {
     task_id:164,
     taskSpentWeek:"26-28 weeks",
     taskSpentDays:196,
     point:2
  },
  {
     task_id:164,
     taskSpentWeek:"30-32 weeks",
     taskSpentDays:224,
     point:1.5
  },
  {
     task_id:164,
     taskSpentWeek:"33 & more weeks",
     taskSpentDays:231,
     point:1
  },
  {
     task_id:165,
     taskSpentWeek:"up to 8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:165,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1.5
  },
  {
     task_id:165,
     taskSpentWeek:"11-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:165,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:166,
     taskSpentWeek:"up to 8 weeks",
     taskSpentDays:56,
     point:2
  },
  {
     task_id:166,
     taskSpentWeek:"9-10 weeks",
     taskSpentDays:70,
     point:1.5
  },
  {
     task_id:166,
     taskSpentWeek:"11-12 weeks",
     taskSpentDays:84,
     point:1
  },
  {
     task_id:166,
     taskSpentWeek:"13 & more weeks",
     taskSpentDays:91,
     point:0.5
  },
  {
     task_id:167,
     taskSpentWeek:"up to 26 weeks",
     taskSpentDays:182,
     point:3
  },
  {
     task_id:167,
     taskSpentWeek:"28-30 weeks",
     taskSpentDays:210,
     point:2
  },
  {
     task_id:167,
     taskSpentWeek:"32-34 weeks",
     taskSpentDays:238,
     point:1
  },
  {
     task_id:167,
     taskSpentWeek:"36 & more weeks",
     taskSpentDays:252,
     point:0.5
  },
  {
     task_id:168,
     taskSpentWeek:"up to 22 weeks",
     taskSpentDays:154,
     point:2
  },
  {
     task_id:168,
     taskSpentWeek:"24-26 weeks",
     taskSpentDays:182,
     point:1.5
  },
  {
     task_id:168,
     taskSpentWeek:"28-30 weeks",
     taskSpentDays:210,
     point:1
  },
  {
     task_id:168,
     taskSpentWeek:"32 & more weeks",
     taskSpentDays:224,
     point:0.5
  },
  {
     task_id:169,
     taskSpentWeek:"up to 36 weeks",
     taskSpentDays:252,
     point:4
  },
  {
     task_id:169,
     taskSpentWeek:"32-34 weeks",
     taskSpentDays:238,
     point:3
  },
  {
     task_id:169,
     taskSpentWeek:"36-38 weeks",
     taskSpentDays:266,
     point:2
  },
  {
     task_id:169,
     taskSpentWeek:"40 & more weeks",
     taskSpentDays:280,
     point:1.5
  }
]


module.exports = {
  timeTasks
}