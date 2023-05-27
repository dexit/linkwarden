// Copyright (C) 2022-present Daniel31x13 <daniel31x13@gmail.com>
// This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, version 3.
// This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
// You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { CollectionIncludingMembers } from "@/types/global";
import useLinkStore from "@/store/links";

export default function ({
  collection,
}: {
  collection: CollectionIncludingMembers;
}) {
  const { links } = useLinkStore();

  return (
    <Link
      href={`/collections/${collection.id}`}
      className="bg-white rounded-md"
    >
      <div className="p-5 rounded-md flex border border-sky-100 flex-col gap-2 justify-between cursor-pointer hover:opacity-60 duration-100">
        <div>
          <div className="flex justify-between text-sky-600 items-center">
            <div className="flex items-baseline gap-1">
              <p className="text-lg w-max font-bold">{collection.name}</p>
              <p className="text-sky-400">{collection.description}</p>
            </div>

            <FontAwesomeIcon
              icon={faChevronRight}
              className="w-3 h-3 text-gray-500"
            />
          </div>
        </div>
        <div className="text-sky-400 flex gap-1 flex-wrap">
          <p>Members:</p>
          {collection.members.map((e, i) => {
            return (
              <p
                className="text-sky-500 font-semibold"
                title={e.user.email}
                key={i}
              >
                {e.user.name}
              </p>
            );
          })}
        </div>
        <div className="flex gap-2 items-baseline">
          <p className="text-sky-500 font-bold">
            {links.filter((e) => e.collectionId === collection.id).length} Links
          </p>
        </div>
      </div>
    </Link>
  );
}
