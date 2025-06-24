"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { ArrowLeft, Check } from "lucide-react";

const questions = [
	{
		id: 1,
		question: "Bạn thích làm việc trong môi trường nào nhất?",
		options: [
			"Làm việc độc lập, tự do sáng tạo",
			"Làm việc nhóm, hợp tác với nhiều người",
			"Làm việc có cấu trúc rõ ràng, quy trình chặt chẽ",
			"Làm việc linh hoạt, thay đổi thường xuyên",
		],
	},
	{
		id: 2,
		question: "Bạn thích hoạt động nào nhất trong thời gian rảnh?",
		options: [
			"Đọc sách, nghiên cứu",
			"Tham gia các hoạt động xã hội",
			"Chơi game, giải trí",
			"Vẽ, thiết kế, sáng tạo nghệ thuật",
		],
	},
	{
		id: 3,
		question: "Bạn tự đánh giá khả năng giao tiếp của mình như thế nào?",
		options: [
			"Tốt, tự tin giao tiếp",
			"Bình thường",
			"Chỉ giao tiếp khi cần thiết",
			"Thích làm việc một mình hơn",
		],
	},
	{
		id: 4,
		question: "Bạn thích môn học nào nhất ở trường?",
		options: [
			"Toán, Tin học",
			"Văn, Ngoại ngữ",
			"Khoa học xã hội",
			"Mỹ thuật, Âm nhạc",
		],
	},
	{
		id: 5,
		question: "Bạn mong muốn công việc tương lai như thế nào?",
		options: [
			"Ổn định, lâu dài",
			"Năng động, nhiều thử thách",
			"Có cơ hội sáng tạo",
			"Được làm việc với nhiều người",
		],
	},
	{
		id: 6,
		question: "Bạn thích sử dụng công nghệ vào việc gì nhất?",
		options: [
			"Lập trình, phát triển phần mềm",
			"Kinh doanh online",
			"Học tập, nghiên cứu",
			"Thiết kế, chỉnh sửa hình ảnh/video",
		],
	},
	{
		id: 7,
		question: "Bạn thường giải quyết vấn đề như thế nào?",
		options: [
			"Phân tích kỹ lưỡng trước khi quyết định",
			"Tham khảo ý kiến người khác",
			"Làm theo cảm tính",
			"Tìm kiếm giải pháp sáng tạo",
		],
	},
	{
		id: 8,
		question: "Bạn thích tham gia hoạt động nào nhất?",
		options: [
			"Câu lạc bộ học thuật",
			"Tình nguyện, hoạt động xã hội",
			"Thể thao",
			"Nghệ thuật, sáng tạo",
		],
	},
	{
		id: 9,
		question: "Bạn đánh giá cao điều gì ở một người lãnh đạo?",
		options: [
			"Khả năng ra quyết định",
			"Khả năng truyền cảm hứng",
			"Khả năng tổ chức",
			"Khả năng sáng tạo",
		],
	},
	{
		id: 10,
		question: "Bạn muốn học tập và làm việc ở môi trường như thế nào?",
		options: [
			"Chuyên nghiệp, hiện đại",
			"Thân thiện, hòa đồng",
			"Tự do, sáng tạo",
			"Năng động, đổi mới",
		],
	},
];

const GameTestHistory = () => {
	const navigate = useRouter();
	const [answers, setAnswers] = useState<string[]>([]);
	const [activeQuestion, setActiveQuestion] = useState(1);
	const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const data = localStorage.getItem("gameTestAnswers");
		if (data) {
			setAnswers(JSON.parse(data));
		}
	}, []);

	const handleRestart = () => {
		localStorage.removeItem("gameTestAnswers");
		navigate.push("/game-test");
	};

	const handleScrollTo = (idx: number) => {
		setActiveQuestion(idx + 1);
		questionRefs.current[idx]?.scrollIntoView({
			behavior: "smooth",
			block: "center",
		});
	};

	return (
		<div className="min-h-screen bg-white flex flex-col">
			{/* Header */}
			<header className="bg-white shadow-sm border-b border-orange-200">
				<div className="max-w-6xl mx-auto px-6 py-4">
					<div className="flex items-center gap-4">
						<div className="bg-orange-500 rounded-xl p-3">
							<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
								<span className="text-orange-500 font-bold text-lg">F</span>
							</div>
						</div>
						<div>
							<h1 className="text-2xl font-bold text-orange-600">
								FPT University Career Assessment
							</h1>
							<p className="text-gray-700 text-sm">
								Kết quả khảo sát định hướng nghề nghiệp
							</p>
						</div>
					</div>
				</div>
			</header>

			<div className="max-w-6xl mx-auto px-6 py-8 flex-1 w-full">
				<div className="flex gap-8">
					{/* Main Content */}
					<div className="flex-1">
						<div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-orange-400">
							<div className="mb-8 flex justify-between items-center">
								<h2 className="text-xl font-bold text-orange-600 mb-1">
									Tổng quan kết quả khảo sát
								</h2>
								<Button
									onClick={handleRestart}
									className="bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all rounded-xl px-6 py-2 flex items-center gap-2"
								>
									<ArrowLeft className="w-4 h-4" />
									Làm lại khảo sát
								</Button>
							</div>
							<div className="mb-6">
								<Progress value={100} className="h-3 bg-orange-100" />
							</div>
							<div className="space-y-6">
								{questions.map((q, idx) => (
									<div
										key={q.id}
										ref={(el) => {
											questionRefs.current[idx] = el;
										}}
										className="bg-orange-50 rounded-xl p-6 border border-orange-200"
									>
										<div className="mb-2 flex items-center gap-2">
											<span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
												Câu {q.id}
											</span>
											<span className="text-black font-semibold">
												{q.question}
											</span>
										</div>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
											{q.options.map((option, oidx) => {
												const isSelected = answers[idx] === option;
												return (
													<div
														key={option}
														className={`flex items-center gap-3 border-2 rounded-lg px-4 py-3 transition-all ${
															isSelected
																? "border-orange-500 bg-white shadow-md"
																: "border-gray-200 bg-white"
														}`}
													>
														<span
															className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-lg ${
																isSelected
																	? "bg-orange-500 text-white"
																	: "bg-gray-200 text-black"
															}`}
														>
															{String.fromCharCode(65 + oidx)}
														</span>
														<span className="text-black font-medium">
															{option}
														</span>
														{isSelected && (
															<Check className="ml-2 w-5 h-5 text-orange-600" />
														)}
													</div>
												);
											})}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					{/* Sidebar: Danh sách số thứ tự câu hỏi */}
					<div className="w-64">
						<div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-200 sticky top-8">
							<h3 className="font-semibold text-black mb-4 text-center">
								Danh sách câu hỏi
							</h3>
							<div className="grid grid-cols-5 gap-2">
								{questions.map((q, idx) => (
									<button
										key={q.id}
										onClick={() => handleScrollTo(idx)}
										className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
											activeQuestion === idx + 1
												? "bg-orange-500 text-white shadow-lg"
												: answers[idx]
												? "bg-black text-white border border-black"
												: "bg-gray-100 text-gray-600 hover:bg-orange-100 border border-gray-300"
										}`}
									>
										{idx + 1}
									</button>
								))}
							</div>
							<div className="mt-6 space-y-2 text-xs">
								<div className="flex items-center gap-2">
									<div className="w-4 h-4 bg-orange-500 rounded"></div>
									<span className="text-black">Câu hiện tại</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-4 h-4 bg-black border border-black rounded"></div>
									<span className="text-black">Đã trả lời</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
									<span className="text-black">Chưa trả lời</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Footer */}
			<footer className="bg-white border-t border-orange-200 mt-16">
				<div className="max-w-6xl mx-auto px-6 py-8 text-center">
					<p className="text-black">
						© 2025 FPT University - Hệ thống tư vấn tuyển sinh và định hướng ngành học
					</p>
				</div>
			</footer>
		</div>
	);
};

export default GameTestHistory;
