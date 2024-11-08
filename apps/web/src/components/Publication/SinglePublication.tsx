import ActionType from "@components/Home/Timeline/EventType";
import PublicationWrapper from "@components/Shared/PublicationWrapper";
import type { AnyPublication, FeedItem } from "@hey/lens";
import cn from "@hey/ui/cn";
import type { FC, ReactNode } from "react";
import { memo } from "react";
import usePushToImpressions from "src/hooks/usePushToImpressions";
import PublicationActions from "./Actions";
import HiddenPublication from "./HiddenPublication";
import PublicationAvatar from "./PublicationAvatar";
import PublicationBody from "./PublicationBody";
import PublicationHeader from "./PublicationHeader";
import PublicationType from "./Type";

interface SinglePublicationProps {
  feedItem?: FeedItem;
  header?: ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
  publication: AnyPublication;
  showActions?: boolean;
  showMore?: boolean;
  showThread?: boolean;
  showType?: boolean;
}

const SinglePublication: FC<SinglePublicationProps> = ({
  feedItem,
  header,
  isFirst = false,
  isLast = false,
  publication,
  showActions = true,
  showMore = true,
  showThread = true,
  showType = true
}) => {
  const rootPublication = feedItem ? feedItem?.root : publication;
  usePushToImpressions(rootPublication.id);

  return (
    <PublicationWrapper
      className={cn(
        isFirst && "rounded-t-xl",
        isLast && "rounded-b-xl",
        "cursor-pointer px-5 pt-4 pb-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
      )}
      publication={rootPublication}
    >
      {header}
      {feedItem ? (
        <ActionType feedItem={feedItem} />
      ) : (
        <PublicationType
          publication={publication}
          showThread={showThread}
          showType={showType}
        />
      )}
      <div className="flex items-start space-x-3">
        <PublicationAvatar feedItem={feedItem} publication={rootPublication} />
        <div className="w-[calc(100%-55px)]">
          <PublicationHeader
            feedItem={feedItem}
            publication={rootPublication}
          />
          {publication.isHidden ? (
            <HiddenPublication type={publication.__typename} />
          ) : (
            <>
              <PublicationBody
                publication={rootPublication}
                showMore={showMore}
              />
              {showActions ? (
                <PublicationActions publication={rootPublication} />
              ) : null}
            </>
          )}
        </div>
      </div>
    </PublicationWrapper>
  );
};

export default memo(SinglePublication);
