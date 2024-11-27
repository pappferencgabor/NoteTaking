const App = () => {
	return (
		<div className="container">
			<div className="column">
				<h1>Notes</h1>

				<div>🏚 All Notes</div>
				<div>⬇ Archived Notes</div>

				<hr />

				<p>Tags</p>

				<div className="tagList">
					<div className="tag">🏷 Cooking</div>	
					<div className="tag">🏷 Cooking</div>
					<div className="tag">🏷 Cooking</div>
				</div>
			</div>

			<div className="column">
				<h2>All Notes</h2>

				<button type="button" className="createNew">+ Create New Note</button>

				<div className="noteList">
					<div className="note active">
						<h3>React Performance Optimization</h3>
						<div className="tagBadges">
							<span>Dev</span>
							<span>React</span>
						</div>
						<p>29 Oct 2024</p>
					</div>
					<div className="note">
						<h3>React Performance Optimization</h3>
						<div className="tagBadges">
							<span>Dev</span>
							<span>React</span>
						</div>
						<p>29 Oct 2024</p>
					</div>
					<div className="note">
						<h3>React Performance Optimization</h3>
						<div className="tagBadges">
							<span>Dev</span>
							<span>React</span>
						</div>
						<p>29 Oct 2024</p>
					</div>
					<div className="note">
						<h3>React Performance Optimization</h3>
						<div className="tagBadges">
							<span>Dev</span>
							<span>React</span>
						</div>
						<p>29 Oct 2024</p>
					</div>
					<div className="note">
						<h3>React Performance Optimization</h3>
						<div className="tagBadges">
							<span>Dev</span>
							<span>React</span>
						</div>
						<p>29 Oct 2024</p>
					</div>
					<div className="note">
						<h3>React Performance Optimization</h3>
						<div className="tagBadges">
							<span>Dev</span>
							<span>React</span>
						</div>
						<p>29 Oct 2024</p>
					</div>
					<div className="note">
						<h3>React Performance Optimization</h3>
						<div className="tagBadges">
							<span>Dev</span>
							<span>React</span>
						</div>
						<p>29 Oct 2024</p>
					</div>
					<div className="note">
						<h3>React Performance Optimization</h3>
						<div className="tagBadges">
							<span>Dev</span>
							<span>React</span>
						</div>
						<p>29 Oct 2024</p>
					</div>
					<div className="note">
						<h3>React Performance Optimization</h3>
						<div className="tagBadges">
							<span>Dev</span>
							<span>React</span>
						</div>
						<p>29 Oct 2024</p>
					</div>
					<div className="note">
						<h3>React Performance Optimization</h3>
						<div className="tagBadges">
							<span>Dev</span>
							<span>React</span>
						</div>
						<p>29 Oct 2024</p>
					</div>
				</div>
			</div>

			<div className="column">
				<h2>React Performance Optimization</h2>

				<table className="noteTable">
					<tr>
						<td>🏷 Tags</td>
						<td>Dev, React</td>
					</tr>
					<tr>
						<td>🕒 Last edited</td>
						<td>29 Oct 2024</td>
					</tr>
				</table>

				<hr />

				<p className="noteContent">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, cum?
					<br /><br />
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum similique molestias soluta iure sunt! Minima id at modi reiciendis, doloremque cum beatae ipsam assumenda ex similique a ratione nobis reprehenderit!
					<br /><br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quis nihil tempora soluta possimus totam magni fugit hic maiores. Soluta, officia amet. Aliquam illum aut totam pariatur quisquam ad cumque?
				</p>

				<hr />

				<button type="button" className="saveBtn">Save Note</button>
				<button type="button" className="cancelBtn">Cancel</button>
			</div>

			<div className="column">
				<div className="searchBar">
					<img src="https://placehold.co/16" alt="" />
					<input type="text" placeholder="Search by title, content or tags..."/>
				</div>
				<div className="controllBtns">
					<button type="button">⬇ Archive Note</button>
					<button type="button">🚮 Delete Note</button>
				</div>
			</div>
		</div>
	)
}

export default App