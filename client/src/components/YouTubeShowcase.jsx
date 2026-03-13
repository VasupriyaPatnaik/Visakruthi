import { getYouTubeThumbnail, getYouTubeWatchUrl } from "../services/youtube";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "./LanguageContext";

export default function YouTubeShowcase({ artisan }) {
  const { text } = useLanguage();

  if (!artisan?.reels?.[0]?.url) {
    return null;
  }

  const video = artisan.reels[0];
  const thumbnail = getYouTubeThumbnail(video.url);
  const watchUrl = getYouTubeWatchUrl(video.url);

  return (
    <section className="py-4">
      <SectionHeader
        eyebrow={text("YouTube Spotlight", "యూట్యూబ్ స్పాట్‌లైట్")}
        title={text("Watch a real craft story before you book a visit.", "సందర్శన బుక్ చేసుకునే ముందు ఒక నిజమైన కళా కథను చూడండి.")}
        description={text(
          "This featured clip gives visitors a quick visual introduction to the making tradition, the artisan context, and the cultural experience behind the workshop.",
          "ఈ ఎంపిక చేసిన క్లిప్ తయారీ సంప్రదాయం, కళాకారుడి నేపథ్యం, మరియు వర్క్‌షాప్ వెనుక ఉన్న సాంస్కృతిక అనుభవాన్ని త్వరగా చూపిస్తుంది."
        )}
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="mesh-border card-surface overflow-hidden rounded-4xl">
          {thumbnail ? <img src={thumbnail} alt={video.title} className="h-72 w-full object-cover" loading="lazy" /> : null}
          <div className="p-6">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-terracotta">{artisan.craftType}</p>
            <h3 className="mt-3 font-display text-3xl font-bold text-indigo">{video.title}</h3>
            <p className="mt-3 text-sm leading-7 text-ink/75">
              {text(
                `${artisan.name} is featured here to help visitors understand the making process before choosing a workshop or cultural trail.`,
                `${artisan.name} యొక్క తయారీ ప్రక్రియను ముందుగానే తెలుసుకోవడానికి ఈ వీడియో సందర్శకులకు సహాయపడుతుంది.`
              )}
            </p>
            <a
              href={watchUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
            >
              {text("Open on YouTube", "యూట్యూబ్‌లో తెరవండి")}
            </a>
          </div>
        </article>

        <div className="mesh-border card-surface overflow-hidden rounded-4xl p-4">
          <iframe
            className="h-88 w-full rounded-3xl lg:h-full"
            src={video.url}
            title={video.title}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
