import { useContext } from "react";
import { Context } from "../context/Context";
import { ImagePlus, Mic, CircleArrowUp } from "lucide-react";

// Input component for user prompts
const Input = () => {
	// Accessing context for managing user input and sending prompts
	const { onSent, setInput, input } = useContext(Context);

	// Function to handle sending prompt on button click
	const handleSendClick = () => {
		if (input) {
			onSent();
		}
	};

	// Function to handle sending prompt on pressing Enter key
	const handleKeyDown = (e) => {
		if (e.key === "Enter" && input) {
			onSent();
		}
	};

	return (
		<div className="w-full mx-auto">
			<div className="flex items-center justify-center gap-4 px-4 py-3 bg-[#fff] lg:py-2 rounded-full md:flex-row md:justify-between text-[#000]">
				{/* Input field for user prompt */}
				<input
					onChange={(e) => setInput(e.target.value)}
					value={input}
					type="text"
					placeholder="Enter a prompt here"
					className="w-full px-2 text-base bg-transparent outline-none text-[#000] font-medium sm:py-2"
					aria-label="Input prompt"
					onKeyDown={handleKeyDown}
				/>

				{/* Buttons for adding image, recording voice, and sending prompt */}
				<div className="flex items-center justify-center gap-2 sm:gap-4">
					<div className="items-center justify-center hidden gap-2 sm:flex sm:gap-4">
						<ImagePlus
							className="w-5 h-5 cursor-pointer sm:w-6 sm:h-6 hover:opacity-75"
							aria-label="Add image"
						/>
						<Mic
							className="w-5 h-5 cursor-pointer sm:w-6 sm:h-6 hover:opacity-75"
							aria-label="Record voice"
						/>
					</div>

					{/* send button for results */}
					{input && (
						<span
							className="cursor-pointer text-[#000]"
							onClick={handleSendClick}
							aria-label="Send"
						>
							<CircleArrowUp size={28} strokeWidth={2.5} />
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default Input;
