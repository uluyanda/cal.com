import { useLocale } from "@calcom/lib/hooks/useLocale";
import type { AppFrontendPayload as App } from "@calcom/types/App";

import { AppCard } from "./AppCard";
import { Slider } from "./Slider";
import { Options} from "./Slider";
export const PopularAppsSlider = <T extends App>({ items }: { items: T[] }) => {
  const { t } = useLocale();

  return (
    <Slider<T>
      title={t("most_popular")}
      items={items.sort((a, b) => (b.installCount || 0) - (a.installCount || 0))}
      itemKey={(app) => app.name}
      options={{
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
            perView: 3,
          },
        },
      } as const as unknown as Options}
      renderItem={(app) => <AppCard app={app} />}
    />
  );
};
