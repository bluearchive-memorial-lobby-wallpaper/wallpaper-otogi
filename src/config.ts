import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-otogi",
  slug: "otogi",
  title: "Otogi",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["ja","ko"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["ja","ko","en"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 14.333333969116211,
    "lines": [
      {
        "id": "ch0174_memoriallobby_1_1",
        "text": {
          "zh-cn": "",
          "ja": "うっ……にが……。",
          "ko": "윽…… 쓰고 텁텁해……",
          "en": "Ugh... It's bitter and dry..."
        }
      },
      {
        "id": "ch0174_memoriallobby_1_2",
        "text": {
          "zh-cn": "",
          "ja": "古い豆ってどうしてこう\n美味しくないんだろ。",
          "ko": "오래 방치한 원두라 그런지 맛이 별로네.",
          "en": "It's seriously awful. Maybe the beans have gone bad."
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 16.666667938232422,
    "lines": [
      {
        "id": "ch0174_memoriallobby_2_1",
        "text": {
          "zh-cn": "",
          "ja": "ロマン……かぁ。\n……そうだね。",
          "ko": "로망이라…… 그렇네.",
          "en": "My dream... Yeah."
        }
      },
      {
        "id": "ch0174_memoriallobby_2_2",
        "text": {
          "zh-cn": "",
          "ja": "ロマンがなかったら、\nここまで来られなかった\nだろうし。",
          "ko": "그 로망이 없었더라면, 여기까지 오지 못했을테니까.",
          "en": "Without that dream, I would never have made it as far as I did."
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 21.666667938232422,
    "lines": [
      {
        "id": "ch0174_memoriallobby_3_1",
        "text": {
          "zh-cn": "",
          "ja": "小さい頃にさ、\n秘密基地に憧れたりしなかった？",
          "ko": "어릴 때, 비밀 기지가 갖고 싶었던 적은 없었어?",
          "en": "Did you ever want to make a secret base when you were young?"
        }
      },
      {
        "id": "ch0174_memoriallobby_3_2",
        "text": {
          "zh-cn": "",
          "ja": "でも、実際に作ってみると\n思ってたのと全然違って……。",
          "ko": "하지만 막상 실제로 만들어 보니 생각과 많이 다르더라고.",
          "en": "The reality of it ended up being pretty different from my imagination when I did finally make one."
        }
      },
      {
        "id": "ch0174_memoriallobby_3_3",
        "text": {
          "zh-cn": "",
          "ja": "狭いし、あんまり\nできることもなくてさ。",
          "ko": "좁고, 불편하고, 할 수 있는 것도 그다지 없고……",
          "en": "They're cramped, uncomfortable, and pretty boring."
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 18.666667938232422,
    "lines": [
      {
        "id": "ch0174_memoriallobby_4_1",
        "text": {
          "zh-cn": "",
          "ja": "なんか……\n夢と現実を突きつけられた\nみたいだったんだよね。",
          "ko": "꿈꿔왔던 현실은 언제나 그런 모습이었던 것 같아.",
          "en": "I guess that's how it always is with dreams. Reality never lives up to them."
        }
      },
      {
        "id": "ch0174_memoriallobby_4_2",
        "text": {
          "zh-cn": "",
          "ja": "理想の大人も、SRTの生活も。",
          "ko": "이상적인 어른의 모습도, SRT의 생활도.",
          "en": "Things like an ideal adult, life in SRT..."
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 17,
    "lines": [
      {
        "id": "ch0174_memoriallobby_5",
        "text": {
          "zh-cn": "",
          "ja": "でも、\nだからこそっていうのかな。\n現実がどんな形でも、\n味があるって思うように\nなったっていうか。",
          "ko": "하지만 그 로망 덕분이었을까.\n현실의 불편함도 이제는 기묘한 풍미로 느껴져.",
          "en": "But at the same time, because of that dream...\nThe disappointments of reality have become an acquired taste for me."
        }
      }
    ]
  },
  {
    "index": 6,
    "motionAnimation": "Talk_06_M",
    "attachmentAnimation": "Talk_06_A",
    "duration": 21.666667938232422,
    "lines": [
      {
        "id": "ch0174_memoriallobby_6_1",
        "text": {
          "zh-cn": "",
          "ja": "先生はさ、ロマンが詰まった\n古いコーヒー、どう思う？",
          "ko": "선생님. 로망을 잔뜩 탄 싸구려 커피의 맛은 어때?",
          "en": "Sensei. What does cheap coffee steeped in my dreams taste like?"
        }
      },
      {
        "id": "ch0174_memoriallobby_6_2",
        "text": {
          "zh-cn": "",
          "ja": "ふふっ……改めまして、\n私の世界へようこそ。",
          "ko": "후훗.\n다시 한번, 나의 세계에 온 걸 환영해.",
          "en": "Fufu. Once again, welcome to my world."
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
