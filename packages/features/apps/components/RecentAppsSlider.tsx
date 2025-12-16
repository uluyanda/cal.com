import { useLocale } from "@calcom/lib/hooks/useLocale";
import type { AppFrontendPayload as App } from "@calcom/types/App";

import { AppCard } from "./AppCard";
import { Slider, Options } from "./Slider";

export const RecentAppsSlider = <T extends App>({ items }: { items: T[] }) => {
  const { t } = useLocale();

  return (
    <Slider<T>
      title={t("recently_added")}
      items={items.sort(
        (a, b) => new Date(b?.createdAt || 0).valueOf() - new Date(a?.createdAt || 0).valueOf()
      )}
      itemKey={(app) => app.name}
      options={{
        type: "slider",
        startAt: 0,
        focusAt: 0,
        gap: 16,
        autoplay: false,
        hoverpause: false,
        keyboard: true,
        bound: true,
        perView: 3,
        breakpoints: {
          768 /* and below */: {
            perView: 1,
          },
        },
      } as const as unknown as Options}
      renderItem={(app) => <AppCard app={app} />}
    />
  );
};
