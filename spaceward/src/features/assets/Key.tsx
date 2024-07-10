import { Icons } from "@/components/ui/icons-assets";
import { useMemo } from "react";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { shapes } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

const Key = ({ keyValue }: { keyValue?: string }) => {
	const avatar = useMemo(() => {
		if (!keyValue) {
			return;
		}
		return createAvatar(shapes, {
			size: 512,
			seed: keyValue,
			shape1Color: ["F5F5F5", "9747FF", "F15A24"],
			shape2Color: ["0000F5", "005156", "0A0A0A"],
			shape3Color: ["D8FF33", "FFAEEE", "8DE3E9"],
		}).toDataUriSync();
	}, [keyValue]);

	return (
		<>
			<div className="cursor-pointer max-h-8 relative p-1 min-w-12 border-[1px] border-border-secondary rounded overflow-hidden isolate">
				{avatar ? (
					<Avatar className="absolute left-0 top-[50%] translate-y-[-50%] w-full h-full object-cover z-[-2] rounded-none">
						<AvatarImage
							src={avatar}
							className="absolute left-0 top-[50%] translate-y-[-50%] w-full h-full object-cover z-[-2]"
						/>
					</Avatar>
				) : null}

				<div className="z-[-1] absolute left-0 top-0 w-full h-full bg-overlay-secondary" />
				<Icons.key className="w-3 h-3" />
				{keyValue ? (
					<div className="text-[10px] text-right text-white">
						...
						{keyValue.slice(-4)}
					</div>
				) : null}
			</div>
		</>
	);
};

export default Key;