import { useContext } from "react";
import { Context } from "../context/Context";
import { ImagePlus, Mic, SendHorizontal } from "lucide-react";

const Input = () => {
	const { onSent, setInput, input } = useContext(Context);

	return (
		<div>
			<div className="w-full mx-auto mt-4 ">
				<div className="flex items-center justify-center gap-4 px-4 py-3 bg-white rounded-full shadow-xl lg:py-4 md:flex-row md:justify-between">
					<input
						onChange={(e) => setInput(e.target.value)}
						value={input}
						type="text"
						placeholder="Enter a prompt here"
						className="w-full px-2 text-sm text-gray-800 bg-transparent outline-none sm:py-2 sm:text-base"
					/>
					<div className="flex items-center justify-center gap-2 sm:gap-4">
						<span className="items-center justify-center hidden gap-2 sm:flex sm:gap-4">
							<ImagePlus className="w-5 h-5 cursor-pointer sm:w-6 sm:h-6" />
							<Mic className="w-5 h-5 cursor-pointer sm:w-6 sm:h-6" />
						</span>
						{input ? (
							<span className="flex items-center justify-center text-white bg-black rounded-full cursor-pointer w-7 sm:w-9 sm:h-9 h-7">
								<SendHorizontal
									className="w-4 h-4 sm:w-5 sm:h-5"
									onClick={() => onSent()}
								/>
							</span>
						) : null}
					</div>
				</div>
				<p className="mt-3 text-xs text-center text-gray-600">
					<span className="font-bold">.Ai</span> can make mistakes. Consider
					checking important information.
				</p>
			</div>
		</div>
	);
};

export default Input;
